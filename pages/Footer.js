import React from 'react'
import { motion } from "framer-motion";

export default function Footer() {
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
    <div className='foot-wrapper'>
        <motion.div 
                    variants={lineAnimation}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    className='foot-line'>
        </motion.div>
        <div className='foot-container'>
            <div className='foot-links'>
                <motion.div 
                    initial={{y:10,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    viewport={{once:true}}
                    transition={{duration:1, delay:0.1}}
                    className='foot-logo'>
                        PSEUDO.AI
                </motion.div>
                <div className='foot-page'>
                    <motion.a href='#home'
                        initial={{y:10,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:1, delay:0.2}}
                    >
                        Home
                    </motion.a>
                    <motion.a href='#about'
                        initial={{y:10,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:1, delay:0.3}}
                    >
                        About
                    </motion.a>
                    <motion.a href='#developers'
                        initial={{y:10,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:1, delay:0.4}}
                    >
                        Developers
                    </motion.a>
                    <motion.a href='#updates'
                        initial={{y:10,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:1, delay:0.5}}
                    >
                        Updates
                    </motion.a>
                    <motion.a href='#faq'
                        initial={{y:10,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:1, delay:0.6}}
                    >
                        FAQ
                    </motion.a>
                </div>
                <div className='foot-media'>
                    <motion.div 
                        initial={{y:10,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:1, delay:0.7}}
                        className='media-head'
                    >
                        Follow on
                    </motion.div>
                    <motion.a href='#about'
                        initial={{y:10,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:1, delay:0.8}}
                    >
                        Github
                    </motion.a>
                    <motion.a href='#developers'
                        initial={{y:10,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:1, delay:0.9}}
                    >
                        Behance
                    </motion.a>
                    <motion.a href='#updates'
                        initial={{y:10,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:1, delay:1}}
                    >
                        Dribbble
                    </motion.a>
                    <motion.a href='#faq'
                        initial={{y:10,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:1, delay:1.1}}
                    >
                        Youtube
                    </motion.a>
                </div>
                <div className='foot-social'>
                    <motion.div 
                        initial={{y:10,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:1, delay:1.2}}
                        className='contact-info'
                    >
                        Contact Information
                    </motion.div>
                    <motion.a 
                        initial={{y:10,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:1, delay:1.3}}
                        className='dev-email'
                        href='mailto: pateljankar124@gmail.com'
                    >
                        pateljankar124@gmail.com
                    </motion.a>
                    <motion.a 
                        initial={{y:10,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:1, delay:1.4}}
                        className='dev-1'
                        href='https://www.linkedin.com/in/janakarpatel/'
                        target='_blank'
                    >
                        Linkedin
                    </motion.a>
                    <motion.a 
                        initial={{y:10,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:1, delay:1.5}}
                        className='dev-1'
                        href='https://twitter.com/JanakarPatel'
                        target='_blank'
                    >
                        Twitter
                    </motion.a>

                    <motion.a initial={{y:10,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:1, delay:1.6}}
                        className='dev-email'
                        href='mailto: abhiprajapati011@gmail.com'
                        target='_blank'
                    >
                        abhiprajapati011@gmail.com
                    </motion.a>
                    <motion.a initial={{y:10,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:1, delay:1.7}}
                        className='dev-1'
                        href='https://www.linkedin.com/in/abhiprajapati05/'
                        target='_blank'
                    >
                        Linkedin
                    </motion.a>
                    <motion.a initial={{y:10,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:1, delay:1.8}}
                        className='dev-1'
                        href='https://twitter.com/abhip05'
                        target='_blank'
                    >
                        Twitter
                    </motion.a>
                </div>
            </div>
            <motion.div initial={{y:10,opacity:0}}
                whileInView={{y:0,opacity:1}}
                viewport={{once:true}}
                transition={{duration:1, delay:1.9}}
                className='btn-div'
            >
                <a href='#home' className='top-btn'>Back to Top</a>
            </motion.div>
            <motion.div initial={{y:10,opacity:0}}
                whileInView={{y:0,opacity:1}}
                viewport={{once:true}}
                transition={{duration:1, delay:2.0}}
                className='foot-details'
            >
                Copyright@2023. All rights reserved by <span>PseudoAI</span>
            </motion.div>
        </div>
    </div>
  )
}
