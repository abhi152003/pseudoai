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
            <h3>Github</h3>
            <h3>Behance</h3>
            <h3>Dribble</h3>
            <h3>Youtube</h3>
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
