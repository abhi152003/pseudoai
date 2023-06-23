import React from 'react'
import {motion} from 'framer-motion';

export default function About() {
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
    <div id='about' className='about-wrapper'>
        <div className='about-container'>
            <div className='about-header'>
                <motion.div 
                    initial={{opacity:0, y:-10, x:-10}}
                    whileInView={{opacity:1,y:0,x:0}}
                    viewport={{ once: true }}
                    transition={{duration:1.2}}
                    className='text-1'
                >
                    Introduction.
                </motion.div>
                <motion.div
                    initial={{opacity:0, y:-10, x:-10}}
                    whileInView={{opacity:1,y:0,x:0}}
                    viewport={{ once: true }}
                    transition={{duration:1.2 , delay:0.1}} 
                    className='text-2'
                >
                    About.
                </motion.div>
            </div>
            <motion.div
                variants={lineAnimation}
                initial='hidden'
                whileInView='visible' 
                viewport={{ once: true }}
                className='about-line'
            >
            </motion.div>
            <div className='about-content'>
                <motion.div
                    initial={{opacity:0, y:-10, x:-10}}
                    whileInView={{opacity:1,y:0,x:0}}
                    viewport={{ once: true }}
                    transition={{duration:1.2 , delay:0.2}}  
                    className='content-1'
                >
                    01
                </motion.div>
                <motion.div 
                    initial={{opacity:0, y:-10, x:-10}}
                    whileInView={{opacity:1,y:0,x:0}}
                    viewport={{ once: true }}
                    transition={{duration:1.2 , delay:0.3}} 
                    className='content-2'
                >
                    Where the art of code comprehension meets the power of AI. 
                    We've created a revolutionary platform that effortlessly converts complex source code into elegant and human-readable pseudocode. 
                    By bridging the gap between developers, designers, and stakeholders, we streamline collaboration and enhance communication. Our mission is to empower you with a newfound clarity in understanding code, 
                    freeing up your time and energy for innovation. 
                    With PseudoAI, embark on a transformative journey where advanced AI technology merges seamlessly with minimalist design, unlocking the true potential of your projects. 
                    Welcome to PseudoAI, where brilliance meets simplicity in the world of code comprehension.
                </motion.div>
            </div>
        </div>
    </div>
  )
}
