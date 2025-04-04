
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

const ExperienceSection = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "DevScope",
      position: "Project Manager",
      period: "2022 - Present",
      description: [
        "Leading digital transformation projects using Microsoft Power Platform",
        "Implementing agile methodologies to ensure project success",
        "Collaborating with cross-functional teams to deliver solutions aligned with client goals",
        "Managing project resources, timelines, and deliverables efficiently"
      ],
      technologies: ["Power Apps", "Power Automate", "SharePoint", "Agile", "Scrum"]
    },
    {
      company: "Impacting Digital",
      position: "Project Manager",
      period: "2019 - 2022",
      description: [
        "Managed client projects from initiation through deployment",
        "Specialized in Microsoft Power Platform implementations",
        "Facilitated workshops to gather requirements and align stakeholders",
        "Developed project plans and ensured timely delivery within budget"
      ],
      technologies: ["Power Platform", "SharePoint", "Agile", "Client Management"]
    }
  ];

  return (
    <section id="experience" className="bg-cesar-light py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Experience</h2>
        
        <div className="mt-12 space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg animate-on-scroll"
            >
              <div className="flex flex-wrap items-start gap-4 mb-4">
                <div className="bg-cesar-blue bg-opacity-10 p-3 rounded-full">
                  <Briefcase className="text-cesar-blue h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-cesar-dark">{exp.position}</h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-cesar-blue font-medium">{exp.company}</span>
                    <span className="text-cesar-gray">|</span>
                    <span className="text-cesar-gray">{exp.period}</span>
                  </div>
                </div>
              </div>
              
              <ul className="mt-4 mb-6 space-y-2 text-cesar-gray">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-cesar-blue mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="bg-cesar-light px-3 py-1 rounded-full text-sm text-cesar-dark">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
