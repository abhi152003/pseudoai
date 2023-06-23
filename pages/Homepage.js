import React from 'react';
import { motion } from "framer-motion";

function Homepage() {

    const lineAnimation = {
        hidden: { scaleX: 0 },
        visible: {
          scaleX: 1,
          transition: {
            duration: 1.2,
            ease: 'easeOut',
            bounce: 0.5, // Adjust the bounce value for desired effect
          },
        },
      };

  return (
    <div id='home' className='home-wrapper'>
        <div className='home-container'>
            <div className='home-text'>
                <motion.div
                    initial={{y:-10, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:1, delay:0.6}} 
                    className='h4'
                >
                    EFFORTLESSLY CONVERT SOURCE CODE TO PSEUDOCODE
                </motion.div>
                <motion.div 
                    initial={{y:-10, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:1, delay:0.7}}
                    className='main-text1'
                >
                    "Transforming Code into Human-readable Pseudocode”
                </motion.div>
                <motion.div 
                    initial={{y:-10, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:1, delay:0.8}}
                    className='main-text2'
                >
                    Unleash the Power of AI !
                </motion.div>
                <motion.div 
                    variants={lineAnimation}
                    initial='hidden'
                    animate='visible'
                    className='line1'
                ></motion.div>
                <motion.div className='line2'
                    variants={lineAnimation}
                    initial='hidden'
                    animate='visible'
                ></motion.div>
                <motion.div 
                    initial={{y:-10, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:1, delay:0.9}}
                    className='sub-text'
                >
                    Transforming Complexity into Clarity.
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Homepage