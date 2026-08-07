import { NAV_HEIGHT } from "@/constants/layout";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { profile } from "@/content/profile";

const ResumePage = () => {
  const resumeUrl = profile.resumePdfPath;
  const resumeFileName = "Rajendra_Chaudhari_Resume.pdf";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main style={{ paddingTop: NAV_HEIGHT }} className="pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <Button variant="default" asChild>
              <a href={resumeUrl} download={resumeFileName}>
                <Download size={16} />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} />
                Open in new tab
              </a>
            </Button>
          </div>

          <div className="surface overflow-hidden rounded-2xl">
            <iframe
              src={`${resumeUrl}#toolbar=1&navpanes=0`}
              title={`${profile.name} Resume`}
              className="w-full min-h-[80vh] border-0 bg-white"
            />
          </div>

          <p className="mt-4 text-center text-sm text-muted-foreground font-mono">
            If the preview doesn’t load, use Download or Open in new tab.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResumePage;
