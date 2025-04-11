
const SkillsSection = () => {
  const softSkills = [
    { name: "Determined", level: 95 },
    { name: "Communicative", level: 90 },
    { name: "Critical Thinking", level: 85 },
    { name: "Leadership", level: 80 },
    { name: "Adaptability", level: 90 },
  ];

  const technicalSkills = [
    { name: "Agile Project Management", level: 99 },
    { name: "Scrum", level: 97 },
    { name: "Backlog Management", level: 97 },
    { name: "Team Management", level: 95 },
    { name: "Process Analysis", level: 88 },
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-cesar-dark font-medium">{name}</span>
        <span className="text-cesar-blue font-medium">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-cesar-blue h-2.5 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="animate-on-scroll">
            <h3 className="text-xl font-semibold text-cesar-dark mb-6 flex items-center">
              <span className="inline-block w-3 h-3 bg-cesar-blue mr-2 rounded-sm"></span>
              Soft Skills
            </h3>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              {softSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-xl font-semibold text-cesar-dark mb-6 flex items-center">
              <span className="inline-block w-3 h-3 bg-cesar-blue mr-2 rounded-sm"></span>
              Hard Skills
            </h3>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
