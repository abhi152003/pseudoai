import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Navbar(props) {
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
    <div className='nav-wrapper'>
      <div className='nav-container'>
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='logo'
        >
          PSEUDO.AI
        </motion.h1>

        <div className='navig'>
          <ul className='navig-ul'>
            <motion.li
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <a href='#developers'>Developers</a>
            </motion.li>
            <motion.li
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <a href='#updates'>Updates</a>
            </motion.li>
            <motion.li
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <a href='#faq'>FAQ</a>
            </motion.li>
            <motion.li
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className='try-btn'>
                <Link href='/pseudoai' passHref>
                  <motion.span
                    onClick={props.navigateToPseudoAI}
                    id='btn'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    Try PseudoAI
                  </motion.span>
                </Link>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>
      <motion.div
        variants={lineAnimation}
        initial='hidden'
        animate='visible'
        className='line'
      ></motion.div>
    </div>
  );
}

export default Navbar;
