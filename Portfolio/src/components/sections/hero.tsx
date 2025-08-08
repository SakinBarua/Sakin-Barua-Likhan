import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-20 pb-10 relative overflow-hidden"
    >
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Sakin Barua Likhan
              </h1>
              <p className="text-xl text-muted-foreground mt-2">
                Web Developer | Project Creator | Innovator
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="max-w-[700px] text-muted-foreground md:text-xl"
            >
              <p>
                Creating beautiful, functional web experiences with modern technologies.
                Specializing in Html,JS, PHP, and UI/UX design.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              <Button 
                size="lg" 
                onClick={() => {
                  const element = document.querySelector("#portfolio");
                  if (element) {
                    window.scrollTo({
                      top: (element as HTMLElement).offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
                className="group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  // Handle CV download
                  alert("CV download functionality would be implemented here");
                }}
                className="group"
              >
                Download CV
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px]">
              <div className="rounded-full bg-gradient-to-br from-primary to-purple-600 h-full w-full flex items-center justify-center overflow-hidden">
                <img
                  src="/my_pic.png"
                  alt="Sakin Barua Likhan"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]"></div>
      </div>
    </section>
  );
}