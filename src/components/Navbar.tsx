import { useState, useEffect, useCallback, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NAV_OFFSET } from "@/constants/layout";
import { LiquidGlassNavIndicator } from "@/components/LiquidGlassNavIndicator";

const navItems = [
  { label: "About", href: "/#about", id: "about" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

const SCROLL_SPY_DEBOUNCE_MS = 220;
const PROGRAMMATIC_SCROLL_END_MS = 140;

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [layoutTick, setLayoutTick] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const pillRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const programmaticTargetRef = useRef<string | null>(null);
  const scrollSpyTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const programmaticScrollTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const isProgrammaticScroll = () => programmaticTargetRef.current !== null;

  const computeActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + NAV_OFFSET + 48;
    let current = navItems[0].id;

    for (const item of navItems) {
      const element = document.getElementById(item.id);
      if (element && element.offsetTop <= scrollPosition) {
        current = item.id;
      }
    }

    return current;
  }, []);

  const applyActiveSectionFromScroll = useCallback(() => {
    if (location.pathname !== "/" || isProgrammaticScroll()) return;
    setActiveSection(computeActiveSection());
  }, [location.pathname, computeActiveSection]);

  const scheduleActiveSectionFromScroll = useCallback(() => {
    if (location.pathname !== "/" || isProgrammaticScroll()) return;

    if (scrollSpyTimerRef.current) {
      clearTimeout(scrollSpyTimerRef.current);
    }

    scrollSpyTimerRef.current = setTimeout(() => {
      applyActiveSectionFromScroll();
    }, SCROLL_SPY_DEBOUNCE_MS);
  }, [location.pathname, applyActiveSectionFromScroll]);

  const releaseProgrammaticScroll = useCallback((targetId: string) => {
    programmaticTargetRef.current = null;
    setActiveSection(targetId);
  }, []);

  const beginProgrammaticNav = useCallback((sectionId: string) => {
    programmaticTargetRef.current = sectionId;

    if (scrollSpyTimerRef.current) {
      clearTimeout(scrollSpyTimerRef.current);
      scrollSpyTimerRef.current = undefined;
    }
    if (programmaticScrollTimerRef.current) {
      clearTimeout(programmaticScrollTimerRef.current);
      programmaticScrollTimerRef.current = undefined;
    }

    setActiveSection(sectionId);
  }, []);

  const handleScrollSpy = useCallback(() => {
    if (programmaticTargetRef.current) {
      const targetId = programmaticTargetRef.current;

      if (programmaticScrollTimerRef.current) {
        clearTimeout(programmaticScrollTimerRef.current);
      }

      programmaticScrollTimerRef.current = setTimeout(() => {
        releaseProgrammaticScroll(targetId);
      }, PROGRAMMATIC_SCROLL_END_MS);

      return;
    }

    scheduleActiveSectionFromScroll();
  }, [releaseProgrammaticScroll, scheduleActiveSectionFromScroll]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    const bump = () => setLayoutTick((n) => n + 1);
    window.addEventListener("resize", bump);
    return () => window.removeEventListener("resize", bump);
  }, []);

  // Remeasure after nav links mount on first paint
  useEffect(() => {
    setLayoutTick((n) => n + 1);
  }, []);

  useEffect(() => {
    applyActiveSectionFromScroll();

    window.addEventListener("scroll", handleScrollSpy, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
      if (scrollSpyTimerRef.current) clearTimeout(scrollSpyTimerRef.current);
      if (programmaticScrollTimerRef.current) {
        clearTimeout(programmaticScrollTimerRef.current);
      }
    };
  }, [applyActiveSectionFromScroll, handleScrollSpy, location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      releaseProgrammaticScroll(sectionId);
      return;
    }

    const offsetPosition =
      element.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;

    if (Math.abs(window.pageYOffset - offsetPosition) < 2) {
      releaseProgrammaticScroll(sectionId);
      return;
    }

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const hash = href.split("#")[1];
    beginProgrammaticNav(hash);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(hash), 150);
    } else {
      scrollToSection(hash);
    }

    setIsMobileMenuOpen(false);
  };

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    beginProgrammaticNav("about");
    if (window.pageYOffset < 2) {
      releaseProgrammaticScroll("about");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(
    () => () => {
      if (scrollSpyTimerRef.current) clearTimeout(scrollSpyTimerRef.current);
      if (programmaticScrollTimerRef.current) {
        clearTimeout(programmaticScrollTimerRef.current);
      }
    },
    []
  );

  const showLiquidGlass = location.pathname === "/";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 py-3 sm:py-4 pointer-events-none"
    >
      <nav
        className={cn(
          "pointer-events-auto relative container mx-auto flex items-center justify-between gap-4 rounded-2xl border px-4 sm:px-5 h-14 sm:h-16 transition-all duration-500",
          isScrolled
            ? "border-white/[0.1] bg-background/60 shadow-[inset_0_1px_0_hsl(var(--foreground)/0.06),0_8px_32px_hsl(222_47%_2%/0.4)] backdrop-blur-2xl"
            : "border-white/[0.07] bg-white/[0.035] shadow-[inset_0_1px_0_hsl(var(--foreground)/0.05),0_4px_24px_hsl(222_47%_2%/0.15)] backdrop-blur-xl"
        )}
      >
        {/* Logo */}
        <motion.a
          href="/"
          onClick={goHome}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group relative z-10 flex shrink-0 items-center gap-2.5 cursor-pointer"
        >
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-primary/25 bg-primary/10 font-mono text-sm font-bold text-primary shadow-[inset_0_1px_0_hsl(var(--foreground)/0.08)] transition-colors duration-[280ms] group-hover:border-primary/55 group-hover:bg-primary/18">
            RC
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-foreground/90 sm:block">
            Rajendra
          </span>
        </motion.a>

        {/* Desktop — glass nav pill with liquid indicator */}
        <div className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 md:block">
          <div
            ref={pillRef}
            className={cn(
              "nav-glass-pill pointer-events-auto relative flex items-center gap-0.5 overflow-visible rounded-full p-1.5",
              isScrolled && "nav-glass-pill--scrolled"
            )}
          >
            <div className="nav-glass-pill__ambient pointer-events-none absolute inset-0 z-[1] rounded-full" />

            {navItems.map((item) => {
              const isActive =
                activeSection === item.id && location.pathname === "/";

              return (
                <a
                  key={item.label}
                  ref={(el) => {
                    if (el) itemRefs.current.set(item.id, el);
                    else itemRefs.current.delete(item.id);
                  }}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative z-10 cursor-pointer px-3.5 py-2 font-mono text-[13px] font-medium transition-colors duration-200 lg:px-4"
                >
                  <span
                    className={cn(
                      "relative transition-all duration-200",
                      isActive
                        ? "text-foreground font-semibold drop-shadow-[0_1px_8px_hsl(var(--primary)/0.35)]"
                        : "text-muted-foreground hover:text-foreground/90"
                    )}
                  >
                    {item.label}
                  </span>
                </a>
              );
            })}

            <LiquidGlassNavIndicator
              activeId={activeSection}
              visible={showLiquidGlass}
              containerRef={pillRef}
              itemRefs={itemRefs}
              remeasureKey={layoutTick}
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="relative z-10 hidden md:block">
          <Button
            variant="hero"
            size="sm"
            className="group px-5 shadow-[inset_0_1px_0_hsl(var(--foreground)/0.2),0_0_20px_hsl(172_66%_50%/0.18)]"
            asChild
          >
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
              Contact Me
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "relative z-10 flex h-10 w-10 items-center justify-center rounded-full md:hidden",
            "surface text-foreground",
            isMobileMenuOpen && "border-primary/40 bg-primary/10 text-primary"
          )}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMobileMenuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto container mx-auto mt-3 overflow-hidden rounded-2xl surface p-2 md:hidden"
          >
            <ul className="flex flex-col gap-1 p-2">
              {navItems.map((item, index) => {
                const isActive =
                  activeSection === item.id && location.pathname === "/";

                return (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 font-mono text-sm font-medium transition-all duration-200",
                        isActive
                          ? "border border-primary/30 bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                      )}
                    >
                      {item.label}
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_hsl(172,66%,50%,0.8)]" />
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            <div className="border-t border-border/50 p-3">
              <Button variant="hero" size="default" className="w-full" asChild>
                <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                  Contact Me
                  <ArrowUpRight size={18} />
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
