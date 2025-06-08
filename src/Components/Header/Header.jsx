import { motion } from 'framer-motion'
import React, { useState } from 'react'
import {a} from 'framer-motion/client';
import {FiGithub,FiTwitter,FiLinkedin,FiMenu,FiX} from 'react-icons/fi';
const Header = () => {
    //toggle menu
    const [isOpen,setIsOpen] = useState(false);
    const toggleMenu = ()=> setIsOpen(!isOpen);

  return (
    <header className='absolute w-full z-50 transition-all duration-300'>
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20'>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          delay: 0.3,
          duration: 1.2,
        }}
        className='flex items-center'
      >
        <div className='h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3'>
          M
        </div>
        <span className='text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent'>
          3D Website
        </span>
      </motion.div>
  
      <nav className='lg:flex hidden space-x-8'>
        {["Home", "About", "Projects", "Experience", "Contact"].map((item, index) => (
          <motion.a
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.7 + index * 0.2,
            }}
            className='relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group'
            href="#"
          >
            {item}
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300'></span>
          </motion.a>
        ))}
      </nav>
      <div className='md:flex hidden items-center space-x-4 '>
        <motion.a
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:1}}
        transition={{delay:1.3, duration:0.8}}
        href="#" className='text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300'>
            <FiGithub className='w-5 h-5'/>
        </motion.a>

        <motion.a
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:1}}
        transition={{delay:1.3, duration:0.8}}
        href="#" className='text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300'>
            <FiTwitter className='w-5 h-5'/>
        </motion.a>

        <motion.a
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:1}}
        transition={{delay:1.3, duration:0.8}}
        href="#" className='text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300'>
            <FiLinkedin className='w-5 h-5'/>
        </motion.a>


      <motion.button
      initial={{opacity:0, scale:0.8}}
      animate={{opacity:1, scale:1}}
      transition={{
        delay:1.6,
        duration:0.8,
        type:"spring",
        stiffness:100,
        damping:15
      }}
      className='ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500 pointer'>
        Hire Me
      </motion.button>
      </div>
{/**Mobile Menu Button  */}
      <div className='md:hidden flex items-center'>
       <motion.button
        whileTap={{sacle:0.7}}
       onClick={toggleMenu}
       className='text-gray-300'>
        {isOpen ? <FiX className='h-6 w-6'/> : <FiMenu className='h-6 w-6'/>}
       </motion.button>
      </div>

    </div>
    {/** Mobile Menu */}
    <motion.div
    initial ={{opacity:0,height:0}}
    animate={{
        opacity: isOpen ? 1 : 0,
        height: isOpen ? "auto" : 0,
    }}
    transition={{duration:0.5}}
    className='md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5'>
        <nav className='flex flex-col space-y-3'>
            {["Home","About","Projects","Experience","Contact"].map((item,index)=>(
                <a onClick={toggleMenu} className='text-gray-300 font-medium py-2' href="" key={item}>
                    {item}
                    </a>
            ))
             }
        </nav>
        <div className='pt-4 border-t border-gray-200 dark:order-gray-700'>
            <div className='flex space-x-5'>
                <a href="">
                    <FiGithub className='h-5 w-5 text-gray-300' />
                </a>
                <a href="">
                    <FiTwitter className='h-5 w-5 text-gray-300' />
                </a>
                <a href="">
                    <FiLinkedin className='h-5 w-5 text-gray-300' />
                </a>
            </div>
            <button onClick={()=>{
                toggleMenu()
            }} 
            className='mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold'>Contact me</button>
        </div>
    </motion.div>
    {/**Contact Form */}


  </header>
  
  )
}

export default Header