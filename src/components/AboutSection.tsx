
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-lg text-cesar-gray leading-relaxed">
              I'm a dedicated Project Manager with a track record of delivering projects aligned with client goals. 
              I specialize in agile methodologies and Microsoft Power Platform solutions.
            </p>
            <p className="text-lg text-cesar-gray leading-relaxed">
              My approach combines technical expertise with strong communication skills, 
              ensuring that all stakeholders remain aligned throughout the project lifecycle. 
              I believe in creating solutions that not only meet technical requirements, 
              but also address the actual business challenges being faced.
            </p>
            <p className="text-lg text-cesar-gray leading-relaxed">
              When I'm not managing projects, I'm constantly exploring new technologies 
              and methodologies to enhance my skills and bring fresh perspectives to my work.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-cesar-light p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-cesar-dark mb-4">My Strengths</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-cesar-blue rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-cesar-dark">Reliability</span>
                    <p className="text-cesar-gray mt-1">Consistently delivering projects on time and within scope.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-cesar-blue rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-cesar-dark">Communication</span>
                    <p className="text-cesar-gray mt-1">Ensuring clear, effective communication across all project stakeholders.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-cesar-blue rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-cesar-dark">Problem-solving</span>
                    <p className="text-cesar-gray mt-1">Approaching challenges with creativity and analytical thinking.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
