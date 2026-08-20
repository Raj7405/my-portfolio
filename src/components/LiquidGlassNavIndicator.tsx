import { useLayoutEffect, useRef, type RefObject } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

export interface LiquidGlassMetrics {
  left: number;
  width: number;
}

interface LiquidGlassNavIndicatorProps {
  activeId: string;
  visible: boolean;
  containerRef: RefObject<HTMLDivElement | null>;
  itemRefs: RefObject<Map<string, HTMLAnchorElement>>;
  remeasureKey?: number;
}

const MEASURE = (container: HTMLDivElement, el: HTMLAnchorElement): LiquidGlassMetrics => {
  const c = container.getBoundingClientRect();
  const e = el.getBoundingClientRect();
  return { left: e.left - c.left, width: e.width };
};

const morphLiquid = (
  from: LiquidGlassMetrics,
  to: LiquidGlassMetrics,
  motionValues: {
    left: ReturnType<typeof useMotionValue<number>>;
    width: ReturnType<typeof useMotionValue<number>>;
    scaleY: ReturnType<typeof useMotionValue<number>>;
    skewX: ReturnType<typeof useMotionValue<number>>;
    opacity: ReturnType<typeof useMotionValue<number>>;
  }
) => {
  const travel = Math.abs(to.left - from.left);
  const moving = travel > 2 || Math.abs(to.width - from.width) > 2;

  if (!moving) {
    motionValues.left.set(to.left);
    motionValues.width.set(to.width);
    return [];
  }

  const minLeft = Math.min(from.left, to.left);
  const maxRight = Math.max(from.left + from.width, to.left + to.width);
  const span = maxRight - minLeft;

  const stretchWidth = Math.min(
    span * 1.08 + Math.max(from.width, to.width) * 0.22,
    span + 48
  );
  const stretchLeft = minLeft - (stretchWidth - span) * 0.5;
  const direction = to.left >= from.left ? 1 : -1;

  const duration = 0.58 + Math.min(travel / 420, 0.22);
  const easeFlow = [0.32, 1.15, 0.48, 1] as const;
  const easeSettle = [0.22, 1.28, 0.42, 1] as const;

  return [
    animate(motionValues.left, [from.left, stretchLeft, to.left], {
      duration,
      times: [0, 0.36, 1],
      ease: [easeFlow, easeSettle],
    }),
    animate(motionValues.width, [from.width, stretchWidth, to.width], {
      duration,
      times: [0, 0.36, 1],
      ease: [easeFlow, easeSettle],
    }),
    animate(motionValues.scaleY, [1, 0.84, 1.07, 0.985, 1], {
      duration,
      times: [0, 0.22, 0.52, 0.78, 1],
      ease: "easeInOut",
    }),
    animate(motionValues.skewX, [0, direction * 4.5, direction * -2, 0.5 * -direction, 0], {
      duration,
      times: [0, 0.3, 0.58, 0.82, 1],
      ease: "easeInOut",
    }),
    animate(motionValues.opacity, [Math.max(motionValues.opacity.get(), 0.85), 1], {
      duration: duration * 0.5,
    }),
  ];
};

export const LiquidGlassNavIndicator = ({
  activeId,
  visible,
  containerRef,
  itemRefs,
  remeasureKey = 0,
}: LiquidGlassNavIndicatorProps) => {
  const left = useMotionValue(0);
  const width = useMotionValue(0);
  const scaleY = useMotionValue(1);
  const skewX = useMotionValue(0);
  const opacity = useMotionValue(0);

  const prevActiveRef = useRef(activeId);
  const prevMetricsRef = useRef<LiquidGlassMetrics | null>(null);
  const animControlsRef = useRef<Array<{ stop: () => void }>>([]);
  const mountedRef = useRef(false);

  useLayoutEffect(() => {
    let cancelled = false;

    const apply = () => {
      if (cancelled) return;

      const container = containerRef.current;
      const activeEl = itemRefs.current?.get(activeId);

      if (!visible || !container || !activeEl) {
        animControlsRef.current.forEach((c) => c.stop());
        animControlsRef.current = [];
        if (!visible) opacity.set(0);
        return;
      }

      const to = MEASURE(container, activeEl);
      if (to.width <= 0) return;

      const from =
        prevMetricsRef.current ??
        (itemRefs.current?.get(prevActiveRef.current)
          ? MEASURE(container, itemRefs.current.get(prevActiveRef.current)!)
          : to);

      const isFirstPaint = !mountedRef.current || opacity.get() === 0;

      animControlsRef.current.forEach((c) => c.stop());
      animControlsRef.current = [];

      const run = async () => {
        if (isFirstPaint) {
          left.set(to.left);
          width.set(to.width);
          scaleY.set(1);
          skewX.set(0);
          opacity.set(1);
          mountedRef.current = true;
        } else if (prevActiveRef.current !== activeId) {
          left.set(from.left);
          width.set(from.width);
          opacity.set(1);
          const controls = morphLiquid(from, to, { left, width, scaleY, skewX, opacity });
          animControlsRef.current = controls;
          await Promise.all(controls);
          scaleY.set(1);
          skewX.set(0);
        } else {
          opacity.set(1);
          const controls = [
            animate(left, to.left, { type: "spring", stiffness: 420, damping: 34 }),
            animate(width, to.width, { type: "spring", stiffness: 420, damping: 34 }),
          ];
          animControlsRef.current = controls;
          await Promise.all(controls);
        }

        prevActiveRef.current = activeId;
        prevMetricsRef.current = to;
      };

      void run();
    };

    // Wait until sibling nav link refs are attached (indicator renders before links)
    requestAnimationFrame(() => {
      requestAnimationFrame(apply);
    });

    return () => {
      cancelled = true;
    };
  }, [activeId, visible, remeasureKey, containerRef, itemRefs, left, width, scaleY, skewX, opacity]);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden
      className="liquid-glass-nav-indicator pointer-events-none absolute top-1.5 bottom-1.5 z-[2] min-h-[2rem]"
      style={{
        position: "absolute",
        left,
        width,
        scaleY,
        skewX,
        opacity,
        transformOrigin: "center center",
      }}
    >
      <div className="liquid-glass-nav-indicator__shadow" />
      <div className="liquid-glass-nav-indicator__body" />
      <div className="liquid-glass-nav-indicator__tint" />
      <div className="liquid-glass-nav-indicator__edge-dark" />
      <div className="liquid-glass-nav-indicator__specular" />
      <div className="liquid-glass-nav-indicator__specular-curve" />
      <div className="liquid-glass-nav-indicator__caustic" />
      <div className="liquid-glass-nav-indicator__iridescent" />
      <div className="liquid-glass-nav-indicator__inner-ring" />
      <div className="liquid-glass-nav-indicator__noise" />
      <div className="liquid-glass-nav-indicator__chromatic liquid-glass-nav-indicator__chromatic--left" />
      <div className="liquid-glass-nav-indicator__chromatic liquid-glass-nav-indicator__chromatic--right" />
    </motion.div>
  );
};
