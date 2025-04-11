import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-cesar-light"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cesar-dark mb-4">
              César Soares
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-cesar-blue mb-6">
              Project Manager
            </h2>
            <p className="text-lg md:text-xl text-cesar-gray mb-8 max-w-xl">
              Helping businesses succeed through digital transformation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="btn-primary"
                onClick={() => document.getElementById("contact")?.scrollIntoView()}
              >
                Get in Touch
              </Button>
              <Button
                variant="outline"
                className="btn-secondary"
                onClick={() => document.getElementById("about")?.scrollIntoView()}
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="/images/fileimage.jpg"
                alt="César Soares"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div> {/* <-- fecha a grid */}

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-cesar-blue w-8 h-8" />
          </a>
        </div>
      </div> {/* <-- fecha o container */}
    </section>
  );
};

export default HeroSection;
