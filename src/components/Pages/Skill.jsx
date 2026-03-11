import React, { useEffect, useState } from "react";

export const Skill = () => {
  const skills = [
    { name: "React & JavaScript", level: 0.9 },
    { name: "UI/UX Design", level: 0.85 },
    { name: "WordPress Development", level: 0.8 },
    { name: "Responsive Design", level: 0.95 },
  ];

  const [progress, setProgress] = useState(Array(skills.length).fill(0));
  useEffect(() => {
    setProgress(skills.map((skill) => skill.level));
  }, []);

  return (
    <>
      <div
        className="skill-div w-full h-full flex  items-center  gap-20 flex-col
      bg-indigo-50 flex-wrap mb-5 pb-15 "
      >
        <div className="heading-div text-center mt-10 ">
          <h1 className="text-4xl font-medium ">Skills & Tools I Use</h1>
          <h3 className="text-gray-500 text-[18px] mt-5">
            A comprehensive toolkit for building modern, scalable web
            applications
          </h3>
        </div>

        <div className="flex gap-30  ">
          <div className="left-div skills-div">
            <div
              className="Frontend border shadow 
             rounded-xl  border-gray-300 mt-5  skill-border"
              style={{ animationDelay: "0.2s" }}
            >
              🎨Frontend
              <div className="flex gap-1 flex-nowrap mt-5">
                <div className="tools-div">HTML5</div>
                <div className="tools-div">CSS3</div>
                <div className="tools-div">JavaScript(ES6)</div>
                <div className="tools-div">React JS</div>
                <div className="tools-div">Tailwind CSS</div>
                <div className="tools-div">Bootstrap</div>
              </div>
            </div>

            <div
              className="version-control 
               mt-5  border rounded-xl p-2 border-gray-300  skill-border"
              style={{ animationDelay: "0.5s" }}
            >
              🛠️Tools & Version Control
              <div className="tools-flex ">
                <div className="tools-div">Git</div>
                <div className="tools-div">GitHub</div>
                <div className="tools-div">VS Code</div>
                <div className="tools-div">Figma</div>
              </div>
            </div>
          </div>

          <div className="right-div skills-div ">
            <div
              className="backend  border mt-5  rounded-xl p-2  border-gray-300 skill-border"
              style={{ animationDelay: "0.2s" }}
            >
              ⚡ Backend & Hosting
              <div className="tools-flex">
                <div className="tools-div">Firebase</div>
                <div className="tools-div">Vercel</div>
                <div className="tools-div">Netlify</div>
                <div className="tools-div">Node.js</div>
              </div>
            </div>
            <div
              className="Design skills-div border mt-5  rounded-xl p-2  border-gray-300  skill-border"
              style={{ animationDelay: "0.7s" }}
            >
              ✨ Design & Bonus
              <div className="tools-flex">
                <div className="tools-div">UI/UX Design</div>
                <div className="tools-div">Graphic Design</div>
                <div className="tools-div">Color Theory</div>
                <div className="tools-div">Typography</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-lg">Expertise Level</h1>
        </div>
  <div className="grid grid-cols-2 gap-10">
                {skills.map((skill, index) => (
                  <div className="Expertis-div w-[480px] flex justify-between  ">
                  <div key={index} className="level-1 flex gap-2 flex-col">
                   <div className="flex justify-between">
                <p>{skill.name}</p>
                <p className="text-indigo-500">{skill.level * 100}%</p>
                      </div>
                      
              <div className="level-container  ">
                <div
                  className="  skill-level bg-indigo-700 origin-left transition-transform duration-3000 ease-out"
                  style={{ transform: `scaleX(${progress[index]})` }}
                ></div>
              </div>
              
            </div>
    </div>
        ))}
  </div>
      </div>
    </>
  );
};
