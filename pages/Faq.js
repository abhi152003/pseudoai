import React from 'react'
import {motion} from 'framer-motion';

export default function Faq() {
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
    <div id='faq' className='faq-wrapper'>
        <div className='faq-container'>
            <div className='faq-header'>
                <motion.div 
                    initial={{opacity:0, y:-10, x:-10}}
                    whileInView={{opacity:1,y:0,x:0}}
                    viewport={{ once: true }}
                    transition={{duration:1}}
                    className='faq-text-1'
                >
                    Question & Answers.
                </motion.div>
                <motion.div
                    initial={{opacity:0, y:-10, x:-10}}
                    whileInView={{opacity:1,y:0,x:0}}
                    viewport={{ once: true }}
                    transition={{duration:1 , delay:0.1}} 
                    className='faq-text-2'
                >
                    Frequently Asked Questions.
                </motion.div>
            </div>
            <motion.div
                variants={lineAnimation}
                initial='hidden'
                whileInView='visible' 
                viewport={{ once: true }}
                className='faq-line'
            >
            </motion.div>
            <div className='faq-content'>
                <motion.div
                    initial={{opacity:0, y:-10, x:-10}}
                    whileInView={{opacity:1,y:0,x:0}}
                    viewport={{ once: true }}
                    transition={{duration:1 , delay:0.2}}  
                    className='faq-content-1'
                >
                    03
                </motion.div>
                <motion.div 
                    initial={{opacity:0, y:-10, x:-10}}
                    whileInView={{opacity:1,y:0,x:0}}
                    viewport={{ once: true }}
                    transition={{duration:1 , delay:0.3}} 
                    className='faq-content-2'
                >
                    <div className='faq-up-1'>
                        <div className='faq-date-1'>Q: Which programming languages does PseudoAI support ?</div>
                        <div className='faq-up-1-content'>PseudoAI supports a wide range of programming languages, including Java, Python, C++, JavaScript, and more.</div>
                    </div>
                    <div className='faq-up-1'>
                        <div className='faq-date-1'>Q: Does PseudoAI require any installation or downloads ?</div>
                        <div className='faq-up-1-content'>NO, PseudoAI is a web-based platform. You can access it directly from you web-browser without the need for any installation or downloads.</div>
                    </div>
                    <div className='faq-up-1'>
                        <div className='faq-date-1'>Q: Can I use PseudoAI for educational purposes ?</div>
                        <div className='faq-up-1-content'>Absolutely! PseudoAI is a valuable tool for educational purposes, helping students understand complex code structures by providing human-readable pseudo translation.</div>
                    </div>
                    <div className='faq-up-1'>
                        <div className='faq-date-1'>Q: Is PseudoAI sutailable for both beginners and experienced developers ?</div>
                        <div className='faq-up-1-content'>Yes, PseudoAI caters to developers of all skill levels, simplifying code comprehension for beginners while enhancing productivity for experienced developers.</div>
                    </div>
                    <div className='faq-up-1'>
                        <div className='faq-date-1'>Q: How does PseudoAI work ?</div>
                        <div className='faq-up-1-content'>PseusoAI utilizes OpenAI trained GPT to convert source code into human-readable pseudocode.</div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}
