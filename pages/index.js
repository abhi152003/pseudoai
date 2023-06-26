import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState } from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Developers from './Developers';
import About from './About';
import Update from './Update';
import Faq from './Faq';
import Footer from './Footer';
import Builder from './Builder';
import { motion } from 'framer-motion';


const Home = () => {

  const [userInput, setUserInput] = useState('');

  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    
    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  }

  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };

  
  return (
    <div className="root">
      <Head>
        <title>PSEUDO.AI</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7915805381655628" crossorigin="anonymous"></script>
      </Head>
      <div className="container">
        <Navbar />
        <Homepage/>
        <Developers/>
        <About/>
        <Builder/>
        <Update/>
        <Faq/>
        <Footer/>
        
        <div className='mobile-message'>
          <motion.h1
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='logo'
          >
            PSEUDO.AI
          </motion.h1>
          <motion.h3
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='mob-msg'
          >
            Please use the desktop version for the best experience.
          </motion.h3>

          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='mobile_social'
          >
            <h2>Follow Us On</h2>
            <a href="https://github.com/abhi152003/pseudoai">Github</a>
            <a href="https://www.behance.net/gallery/173682701/PSEUDOAI">Behance</a>
            <a href="https://dribbble.com/shots/21831108-PSEUDO-AI-Revolutionizing-Code-Comprehension?utm_source=Clipboard_Shot&utm_campaign=jackpatel&utm_content=PSEUDO%20AI%20%3A%20Revolutionizing%20Code%20Comprehension&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=jackpatel&utm_content=PSEUDO%20AI%20%3A%20Revolutionizing%20Code%20Comprehension&utm_medium=Social_Share">Dribble</a>
            <a href="https://www.youtube.com/watch?v=Gr6Mj-ACHYI">Youtube</a>
          </motion.div>
          
          <motion.div 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='mobile_copy'
            >
                Copyright@2023. All rights reserved by <span>PseudoAI</span>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
