import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  ExternalLink,
  ImageIcon,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { Project } from "@/fixtures/projects";
import { cn } from "@/lib/utils";

type ProofItem = NonNullable<Project["proof"]>[number];

interface ProjectProofGalleryProps {
  proof: ProofItem[];
}

export const ProjectProofGallery = ({ proof }: ProjectProofGalleryProps) => {
  const images = proof.filter((item) => item.type === "image");
  const links = proof.filter((item) => item.type === "link");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length
    );
  }, [images.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current + 1) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, goPrev, goNext]);

  if (images.length === 0 && links.length === 0) return null;

  const activeImage = lightboxIndex !== null ? images[lightboxIndex] : null;

  return (
    <section className="relative mb-8 overflow-hidden rounded-2xl surface p-6 md:p-8">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-20" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge variant="outline" className="mb-3 border-primary/30 bg-primary/10 text-primary">
            Visual proof
          </Badge>
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-foreground md:text-3xl">
            <ImageIcon size={24} className="text-primary" />
            Project Gallery
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
            Screenshots from the live product — click any screen to view full size.
          </p>
        </div>
        {images.length > 0 && (
          <div className="surface-chip flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{images.length}</span>
            screens
          </div>
        )}
      </div>

      {images.length > 0 && (
        <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item, index) => (
            <motion.button
              key={`${item.url}-${index}`}
              type="button"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setLightboxIndex(index)}
              className={cn(
                "group relative overflow-hidden rounded-xl surface text-left transition-all duration-[280ms]",
                "hover:border-primary/40 hover:shadow-[var(--shadow-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                index === 0 && "sm:col-span-2 lg:col-span-2"
              )}
            >
              <div
                className={cn(
                  "relative flex items-center justify-center overflow-hidden bg-muted/20",
                  index === 0 ? "min-h-[280px] md:min-h-[360px]" : "min-h-[200px] md:min-h-[220px]"
                )}
              >
                <img
                  src={item.url}
                  alt={item.title || `Screenshot ${index + 1}`}
                  className="max-h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="absolute right-3 top-3 rounded-full border border-border/60 bg-background/80 px-2.5 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="absolute bottom-0 left-0 right-0 flex translate-y-2 items-center justify-between gap-3 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="truncate text-sm font-medium text-foreground">
                    {item.title || `Screenshot ${index + 1}`}
                  </p>
                  <span className="flex shrink-0 items-center gap-1 rounded-full bg-primary/90 px-2.5 py-1 text-xs font-medium text-primary-foreground">
                    <Expand size={12} />
                    View
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      )}

      {links.length > 0 && (
        <div className="relative mt-6 flex flex-wrap gap-3">
          {links.map((item, index) => (
            <a
              key={`${item.url}-${index}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-chip inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/10"
            >
              <ExternalLink size={16} className="text-primary" />
              {item.title || "View Link"}
            </a>
          ))}
        </div>
      )}

      <Dialog open={lightboxIndex !== null} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent className="max-h-[95vh] max-w-6xl gap-0 overflow-hidden border-border/60 bg-background/95 p-0 backdrop-blur-xl [&>button:last-child]:hidden">
          <DialogTitle className="sr-only">
            {activeImage?.title || "Project screenshot"}
          </DialogTitle>

          {activeImage && lightboxIndex !== null && (
            <>
              <div className="flex items-center justify-between border-b border-border/60 px-4 py-3 md:px-6">
                <div className="min-w-0 pr-4">
                  <p className="truncate text-sm font-medium text-foreground md:text-base">
                    {activeImage.title || `Screenshot ${lightboxIndex + 1}`}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {lightboxIndex + 1} of {images.length}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  aria-label="Close gallery"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative flex min-h-[50vh] items-center justify-center bg-muted/10 px-4 py-6 md:min-h-[60vh] md:px-12">
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={goPrev}
                      className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 text-foreground shadow-lg transition-colors hover:border-primary/40 hover:bg-primary/10 md:left-4"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 text-foreground shadow-lg transition-colors hover:border-primary/40 hover:bg-primary/10 md:right-4"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                <img
                  src={activeImage.url}
                  alt={activeImage.title || `Screenshot ${lightboxIndex + 1}`}
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>

              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto border-t border-border/60 bg-background/80 p-4">
                  {images.map((item, index) => (
                    <button
                      key={`thumb-${item.url}-${index}`}
                      type="button"
                      onClick={() => setLightboxIndex(index)}
                      className={cn(
                        "h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all",
                        index === lightboxIndex
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-border/60 opacity-70 hover:opacity-100"
                      )}
                    >
                      <img
                        src={item.url}
                        alt=""
                        className="h-full w-full object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
