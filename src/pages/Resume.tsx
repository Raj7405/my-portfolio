import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Resume } from "@/components/Resume";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ResumePage = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    const element = resumeRef.current?.querySelector('.resume') as HTMLElement;
    if (!element) return;

    try {
      // Show loading state
      const button = document.querySelector('[data-download-btn]') as HTMLButtonElement;
      const originalContent = button?.innerHTML;
      if (button) {
        button.disabled = true;
        button.innerHTML = '<svg class="lucide lucide-download" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Generating PDF...';
      }

      // Create canvas from the resume element with optimized settings for single page
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        width: element.scrollWidth,
        height: element.scrollHeight,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });

      // A4 dimensions in mm
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Create PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png', 1.0);
      
      // Scale to fit on single page if needed
      let finalWidth = imgWidth;
      let finalHeight = imgHeight;
      
      if (imgHeight > pageHeight) {
        // Scale down to fit on one page
        const scale = pageHeight / imgHeight;
        finalWidth = imgWidth * scale;
        finalHeight = pageHeight;
      }
      
      // Center the content
      const xOffset = (imgWidth - finalWidth) / 2;
      pdf.addImage(imgData, 'PNG', xOffset, 0, finalWidth, finalHeight);

      // Save the PDF
      pdf.save('Rajendra_Chaudhari_Resume.pdf');

      // Reset button state
      if (button && originalContent) {
        button.disabled = false;
        button.innerHTML = originalContent;
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
      
      const button = document.querySelector('[data-download-btn]') as HTMLButtonElement;
      if (button) {
        button.disabled = false;
        const originalContent = button.getAttribute('data-original-content');
        if (originalContent) {
          button.innerHTML = originalContent;
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-6">
            <Button 
              onClick={handleDownloadPDF}
              variant="default"
              size="lg"
              data-download-btn
              data-original-content='<svg class="lucide lucide-download" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Download Resume'
              className="gap-2"
            >
              <Download size={20} />
              Download Resume
            </Button>
          </div>
          <div ref={resumeRef}>
            <Resume />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResumePage;

