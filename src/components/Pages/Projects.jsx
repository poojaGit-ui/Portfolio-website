import React, { useState } from 'react'
import Cards from '../Cards';
import Todo from "../../assets/Todo.jpg"
import resturant from "../../assets/resturant.jpg"
import mobileApp from "../../assets/mobileBanking.jpg"
import marketPlace from "../../assets/marketplace.jpg"
import sass from "../../assets/sass.jpg"
import dashboard from "../../assets/dashboard.jpg"

export const Projects = () => {

  const details = [
    {
      id:"01",
      tech: "Web Dev",
      title: "E-commerce Dashboard",
      summary: "Modern React dashboard with real-time analytics, inventory management, and sales tracking.",
      image:`${dashboard}`,
      usedTech: ["React","TypeScript","Tailwind CSS","Chart.js"]
       
    },

    {
      id:"02",
      tech: "Web Dev",
      title: "Task Management App",
      summary : "Collaborative project management tool with drag-and-drop functionality and team features.",
      image:`${Todo}`,
      usedTech: ["React", "Node.js", "MongoDB", "Socket.io"]
       
    },

    {
       id:"03",
      tech: "WordPress",
      title: "Restaurant Website",
      summary : "Responsive WordPress site with online ordering system and reservation management.",
      image:`${resturant}`,
      usedTech: ["WordPress", "WooCommerce", "Elementor", "PHP"]
       
    },

    {
       id:"04",
      tech: "UI Design",
      title: "Mobile Banking App UI",
      summary : "Clean and intuitive mobile banking interface design with accessibility focus.",
      image:`${mobileApp}`,
      usedTech: ["Figma", "Adobe XD", "Prototyping"]
       
    },

    {
       id:"05",
      tech: "WordPress",
      title: "Multi-vendor Marketplace",
      summary : "WordPress-powered marketplace with vendor management and payment integration.",
      image:`${marketPlace}`,
      usedTech: ["WordPress", "WooCommerce", "Dokan", "Stripe"]
       
    },

    {
       id:"06",
      tech: "UI Design",
      title: "SaaS Landing Page",
      summary : "High-converting landing page design for a productivity SaaS application.",
      image:`${sass}`,
      usedTech: ["Figma", "User Research", "A/B Testing"]
       
    },
  ]

   const [activeTab, setActiveTab] = useState("all");

  // 🔥 Function to handle active styling
  const getTabClass = (tabName) => {
    return `
      ${
        activeTab === tabName
          ? "active-tab"
          : "project-menu"
      }`;
  }
  

const filteredProjects =
  activeTab === "all"
    ? details
    : details.filter((currProject) => currProject.tech === activeTab);



  return (
    <>
      <div className='project-div flex flex-col h-full w-full gap-2'>
        <div className=' heading 
          flex text-center flex-col justify-evenly h-26 mt-10 mb-10'>
        <h1 className='text-3xl font-bold'>Featured Projects</h1>
        <h2 className='text-gray-500'>A showcase of my recent work spanning web development, WordPress, and UI design</h2>
        </div>
    
        <div className='flex justify-center gap-5'>

          <button className={getTabClass("all")}
          onClick={() => setActiveTab("all")}>All</button>
          
          <button  className={getTabClass("Web Dev")}
          onClick={() => setActiveTab("Web Dev")}>WordPress</button>

          <button  className={getTabClass("WordPress")}
          onClick={() => setActiveTab("WordPress")}>Web Dev</button>
 
          <button  className={getTabClass("UI Design")}
          onClick={() => setActiveTab("UI Design")}>UI Design</button>

        </div>

        <div className='flex justify-center items-center '>
          <ul className='flex flex-wrap gap-10 w-260 mt-5 mb-5 '>
            {
              filteredProjects.map((currElem) => {
               
                return <Cards 
                  key={currElem.id} currElem={currElem} />
              })
            }
          </ul>
          
        </div>
      </div>
    
    </>
  )
}
