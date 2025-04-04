
import { Award } from "lucide-react";

interface Certification {
  title: string;
  organization: string;
  date: string;
  description: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      title: "PL-900: Microsoft Power Platform Fundamentals",
      organization: "Microsoft",
      date: "2022",
      description: "Validated knowledge of Power Platform capabilities, including Power Apps, Power Automate, Power BI, and Power Virtual Agents."
    },
    {
      title: "PSPO I: Professional Scrum Product Owner I",
      organization: "Scrum.org",
      date: "2021",
      description: "Certified in the Scrum framework, with a focus on maximizing the value of products built with Scrum."
    }
  ];

  return (
    <section id="certifications" className="bg-cesar-light py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex transition-all hover:shadow-lg animate-on-scroll"
            >
              <div className="mr-4">
                <div className="bg-cesar-blue bg-opacity-10 p-3 rounded-full">
                  <Award className="text-cesar-blue h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cesar-dark">{cert.title}</h3>
                <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
                  <span className="text-cesar-blue font-medium">{cert.organization}</span>
                  <span className="text-cesar-gray">|</span>
                  <span className="text-cesar-gray">{cert.date}</span>
                </div>
                <p className="mt-3 text-cesar-gray">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
