import React, { useState } from 'react'
import Project from "../components/Project"
import { myProjects } from "../constants"
import {motion, useMotionValue} from 'motion/react'
import { useSpring } from 'motion/react'

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 50, damping: 10 });
  const springY = useSpring(y, { stiffness: 50, damping: 10 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20); // Adjust the offset as needed
    y.set(e.clientY + 20); // Adjust the offset as needed
  }

  const [preview, setPreview] = useState(null);
  return (
    <section id="work" onMouseMove={handleMouseMove}
     className="relative c-space section-spacing">
        <h1 className="text-heading">My Selected Projects</h1>
        <div  className="bg-gradient-to-r from-transparent
        via-neutral-700 to-transparent mt-12 h-[1px] w-full"/>
        {myProjects.map((project) => (<Project key={project.id}
         {...project} setPreview={setPreview}/>))}
        {preview && (<motion.img className='fixed top-0 left-0 z-50 object-cover h-56
         rounded-lg shadow-lg pointer-events-none w-80' 
         src={preview}
         style={{ x: springX, y: springY }}
         />)}
    </section>
  )
}

export default Projects

