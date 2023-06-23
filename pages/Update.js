import React from 'react'
import {motion} from 'framer-motion';

export default function Update() {
    const lineAnimation = {
        hidden: { scaleX: 0 },
        visible: {
          scaleX: 1,
          transition: {
            duration: 1,
            ease: 'easeOut',
            bounce: 0.5, // Adjust the bounce value for desired effect
          },
        },
      };

  return (
    <div id='updates' className='update-wrapper'>
        <div className='update-container'>
            <div className='update-header'>
                <motion.div 
                    initial={{opacity:0, y:-10, x:-10}}
                    whileInView={{opacity:1,y:0,x:0}}
                    viewport={{ once: true }}
                    transition={{duration:1}}
                    className='update-text-1'
                >
                    What's New.
                </motion.div>
                <motion.div
                    initial={{opacity:0, y:-10, x:-10}}
                    whileInView={{opacity:1,y:0,x:0}}
                    viewport={{ once: true }}
                    transition={{duration:1 , delay:0.1}} 
                    className='update-text-2'
                >
                    Updates.
                </motion.div>
            </div>
            <motion.div
                variants={lineAnimation}
                initial='hidden'
                whileInView='visible' 
                viewport={{ once: true }}
                className='update-line'
            >
            </motion.div>
            <div className='update-content'>
                <motion.div
                    initial={{opacity:0, y:-10, x:-10}}
                    whileInView={{opacity:1,y:0,x:0}}
                    viewport={{ once: true }}
                    transition={{duration:1 , delay:0.2}}  
                    className='update-content-1'
                >
                    02
                </motion.div>
                <motion.div 
                    initial={{opacity:0, y:-10, x:-10}}
                    whileInView={{opacity:1,y:0,x:0}}
                    viewport={{ once: true }}
                    transition={{duration:1 , delay:0.3}} 
                    className='update-content-2'
                >
                    <div className='up-1'>
                        <div className='date-1'>June,2023</div>
                        <div className='up-1-content'>Conversion of Source Code to Pseudocode with AI More Precision.</div>
                    </div>
                    <motion.div
                        variants={lineAnimation}
                        initial='hidden'
                        whileInView='visible' 
                        viewport={{ once: true }}
                        className='update-line1'
                    >
                    </motion.div>
                    <div className='up-1'>
                        <div className='date-1'>June,2023</div>
                        <div className='up-1-content'>Now available for most of the popular programming languages.</div>
                    </div>
                    <motion.div
                        variants={lineAnimation}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }} 
                        className='update-line1'
                    >
                    </motion.div>
                    <div className='up-1'>
                        <div className='date-1'>May,2023</div>
                        <div className='up-1-content'>New User friendly UX/UI Design.</div>
                    </div>
                    <motion.div
                        variants={lineAnimation}
                        initial='hidden'
                        whileInView='visible' 
                        viewport={{ once: true }}
                        className='update-line1'
                    >
                    </motion.div>
                    <div className='up-1'>
                        <div className='date-1'>May,2023</div>
                        <div className='up-1-content'>New Website Launch with Bug fixes</div>
                    </div>
                    <motion.div
                        variants={lineAnimation}
                        initial='hidden'
                        whileInView='visible' 
                        viewport={{ once: true }}
                        className='update-line1'
                    >
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}
