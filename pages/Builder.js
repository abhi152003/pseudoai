import React from 'react'
import {motion} from 'framer-motion';

export default function Builder() {
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
    <div id='developers' className='build-wrapper'>
        <div className='build-container'>
            <div className='build-header'>
                <motion.div 
                    initial={{opacity:0, y:-10, x:-10}}
                    whileInView={{opacity:1,y:0,x:0}}
                    viewport={{ once: true }}
                    transition={{duration:1.2}}
                    className='build-text-1'
                >
                    Builders.
                </motion.div>
                <motion.div
                    initial={{opacity:0, y:-10, x:-10}}
                    whileInView={{opacity:1,y:0,x:0}}
                    viewport={{ once: true }}
                    transition={{duration:1.2 , delay:0.1}} 
                    className='build-text-2'
                >
                    Developers.
                </motion.div>
            </div>
            <motion.div
                variants={lineAnimation}
                initial='hidden'
                whileInView='visible' 
                viewport={{ once: true }}
                className='build-line'
            >
            </motion.div>
            <div className='build-content-1'>
                <div className='build-1'>
                    <motion.div 
                        initial={{opacity:0, y:20}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{ once: true }}
                        transition={{duration:2, delay:0.3}}
                        className='tell-1'>
                        "I am a developer, turning complex ideas into elegant solutions, one line of code at a time."
                    </motion.div>
                    <div className='skills-1'>
                        <motion.div 
                            initial={{opacity:0, y:10}}
                            whileInView={{opacity:1,y:0}}
                            viewport={{ once: true }}
                            transition={{duration:1.2, delay:0.4}}>
                                Front-end Developer
                        </motion.div>
                        <motion.div 
                            initial={{opacity:0, y:10}}
                            whileInView={{opacity:1,y:0}}
                            viewport={{ once: true }}
                            transition={{duration:1.2, delay:0.5}}>
                                UI/UX Design
                        </motion.div>
                        <motion.div
                            initial={{opacity:0, y:10}}
                            whileInView={{opacity:1,y:0}}
                            viewport={{ once: true }}
                            transition={{duration:1.2, delay:0.6}}>
                            Founder
                        </motion.div>
                    </div>
                    <motion.div 
                        initial={{opacity:0, x:-200}}
                        whileInView={{opacity:1,x:0}}
                        viewport={{ once: true }}
                        transition={{duration:2, delay:1.3}}
                        className='build-img-1'></motion.div>
                    <div className='build-details-1'>
                        <motion.div 
                            initial={{opacity:0,x:100}}
                            whileInView={{opacity:1,x:0}}
                            viewport={{ once: true }}
                            transition={{duration:1.2, delay:0.7}}
                            className='build-name-1'>
                                Janakar Patel
                        </motion.div>
                        <motion.div variants={lineAnimation}
                            initial='hidden'
                            whileInView='visible' 
                            viewport={{ once: true }}
                            className='bl1'>
                        </motion.div>
                        <motion.a 
                            initial={{opacity:0,x:100}}
                            whileInView={{opacity:1,x:0}}
                            viewport={{ once: true }}
                            transition={{duration:1.2, delay:0.8}}
                            className='build-email-1'
                            href='mailto: pateljankar124@gmail.com'
                            target='_blank'>
                                pateljankar124@gmail.com
                        </motion.a>
                        <motion.div variants={lineAnimation}
                            initial='hidden'
                            whileInView='visible' 
                            viewport={{ once: true }}
                            className='bl1'>
                        </motion.div>
                        <div className='build-social-1'>
                            <motion.a  
                                initial={{opacity:0, x:50}}
                                whileInView={{opacity:1,x:0}}
                                viewport={{ once: true }}
                                transition={{duration:1.2, delay:0.9}}
                                href='https://www.linkedin.com/in/janakarpatel/'
                                target='_blank'>
                                    Linkedin
                            </motion.a >
                            <motion.a  
                                initial={{opacity:0, x:90}}
                                whileInView={{opacity:1,x:0}}
                                viewport={{ once: true }}
                                transition={{duration:1.2, delay:1}}
                                href='https://instagram.com/janakar_patel'
                                target='_blank'>
                                    Instagram
                            </motion.a >
                            <motion.a  
                                initial={{opacity:0, x:70}}
                                whileInView={{opacity:1, x:0}}
                                viewport={{ once: true }}
                                transition={{duration:1.2, delay:1.1}}
                                href='https://twitter.com/JanakarPatel'
                                target='_blank'>
                                    Twitter
                            </motion.a >
                        </div>
                    </div>  
                </div>
                <div className='build-back-1'></div>  
            </div>
            <div className='build-content-2'>
                <div className='build-2'>
                    <motion.div 
                        initial={{opacity:0, y:20}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{ once: true }}
                        transition={{duration:2, delay:0.3}}
                        className='tell-2'>
                        "I am developer who turning server-side magic into seamless user experiences."
                    </motion.div>
                    <div className='skills-2'>
                        <motion.div 
                            initial={{opacity:0, y:10}}
                            whileInView={{opacity:1,y:0}}
                            viewport={{ once: true }}
                            transition={{duration:1.2, delay:0.4}}>
                                React Developer
                        </motion.div>
                        <motion.div 
                            initial={{opacity:0, y:10}}
                            whileInView={{opacity:1,y:0}}
                            viewport={{ once: true }}
                            transition={{duration:1.2, delay:0.5}}>
                                Back-end Development
                        </motion.div>
                        <motion.div
                            initial={{opacity:0, y:10}}
                            whileInView={{opacity:1,y:0}}
                            viewport={{ once: true }}
                            transition={{duration:1.2, delay:0.6}}>
                            Co-Founder
                        </motion.div>
                    </div>
                    <motion.div 
                        initial={{opacity:0, x:-200}}
                        whileInView={{opacity:1,x:0}}
                        viewport={{ once: true }}
                        transition={{duration:2, delay:1.3}}
                        className='build-img-2'></motion.div>
                    <div className='build-details-2'>
                        <motion.div 
                            initial={{opacity:0,x:100}}
                            whileInView={{opacity:1,x:0}}
                            viewport={{ once: true }}
                            transition={{duration:1.2, delay:0.7}}
                            className='build-name-2'>
                                Abhi Prajapati
                        </motion.div>
                        <motion.div variants={lineAnimation}
                            initial='hidden'
                            whileInView='visible' 
                            viewport={{ once: true }}
                            className='bl2'>
                        </motion.div>
                        <motion.a 
                            initial={{opacity:0,x:100}}
                            whileInView={{opacity:1,x:0}}
                            viewport={{ once: true }}
                            transition={{duration:1.2, delay:0.8}}
                            className='build-email-2'
                            href='mailto: abhiprajapati011@gmail.com'
                            target='_blank'>
                                abhiprajapati011@gmail.com
                        </motion.a>
                        <motion.div variants={lineAnimation}
                            initial='hidden'
                            whileInView='visible' 
                            viewport={{ once: true }}
                            className='bl2'>
                        </motion.div>
                        <div className='build-social-2'>
                            <motion.a  
                                initial={{opacity:0, x:50}}
                                whileInView={{opacity:1,x:0}}
                                viewport={{ once: true }}
                                transition={{duration:1.2, delay:0.9}}
                                href='https://www.linkedin.com/in/abhiprajapati05/'
                                target='_blank'>
                                    Linkedin
                            </motion.a >
                            <motion.a  
                                initial={{opacity:0, x:90}}
                                whileInView={{opacity:1,x:0}}
                                viewport={{ once: true }}
                                transition={{duration:1.2, delay:1}}
                                href='https://www.instagram.com/abhiprajapati_tweets/'
                                target='_blank'>
                                    Instagram
                            </motion.a >
                            <motion.a  
                                initial={{opacity:0, x:70}}
                                whileInView={{opacity:1, x:0}}
                                viewport={{ once: true }}
                                transition={{duration:1.2, delay:1.1}}
                                href='https://twitter.com/abhip05'
                                target='_blank'>
                                    Twitter
                            </motion.a >
                        </div>
                    </div>  
                </div>
                <div className='build-back-2'></div>  
            </div>
        </div>
    </div>
  )
}
