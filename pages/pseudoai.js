import React from 'react';
import { useState } from 'react';
import Head from 'next/head';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Link from 'next/link';

function PseudoAIPage() {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    console.log("Calling OpenAI...");
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };

  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };

  const refreshInput = () => {
    setUserInput('');
  };

  return (
    <div className='ai-wrapper'>
      <div className='content-container'>
        <div className='ai-content-1'>
          <div className='ai-logo'>PSEUDO.AI</div>
          <div className='guide'>
            Guide Steps:
            <br />
            <br />
            1.Enter a concise and descriptive prompt or topic.
            <br />
            2.Choose the desired programming language.
            <br />
            3.Click the "GO" button to generate the AI response.
            <br />
            4.Copy the generated content for further use.
            <br />
            <h4>Note : Please choose the programming language for optimized solution</h4>
            <br />
          </div>
          <a className='back-to-site' href='/'>Back to website</a>
          <div className='ai-social'>
            <div>
              Support Us On
            </div>
            <a href="https://github.com/abhi152003/pseudoai">Github</a>
            <a href="https://www.behance.net/gallery/173682701/PSEUDOAI">Behance</a>
            <a href="https://dribbble.com/shots/21831108-PSEUDO-AI-Revolutionizing-Code-Comprehension?utm_source=Clipboard_Shot&utm_campaign=jackpatel&utm_content=PSEUDO%20AI%20%3A%20Revolutionizing%20Code%20Comprehension&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=jackpatel&utm_content=PSEUDO%20AI%20%3A%20Revolutionizing%20Code%20Comprehension&utm_medium=Social_Share">Dribble</a>
            <a href="https://www.youtube.com/watch?v=Gr6Mj-ACHYI">Youtube</a>
          </div>
          <div className='ai-copyrights'>Copyright@2023. All rights reserved by PseudoAI</div>
        </div>

        <div className='ai-content-2'>
          <button className="ai-refresh-button" onClick={refreshInput}>
            <img src='https://cdn-icons-png.flaticon.com/512/4210/4210604.png' className='refresh-btn'/>
          </button>
          <select
                value={selectedLanguage}
                onChange={(event) => setSelectedLanguage(event.target.value)}
                className='options-select'
              >
                <option>C</option>
                <option>C++</option>
                <option>C#</option>
                <option>Java</option>
                <option>Python3</option>
                <option>JavaScript</option>
                <option>NodeJS</option>
                <option>PHP</option>
                <option>Kotlin</option>
                <option>Swift</option>
                <option>SQL</option>
            </select>
            <a className="go" onClick={callGenerateEndpoint}>
              <div className="ai-generate">
                {isGenerating ? <span className="loader"></span> : <p className='go-btn'>GO</p>}
              </div>
            </a>
            <textarea
                  placeholder="paste your code here"
                  className="prompt-box"
                  value={userInput}
                  onChange={onUserChangedText}
                  spellCheck="false"
                  style={{
                    textDecoration: 'none',
                    boxShadow: 'none',
                  }}
            />
            
            <div className="ai-output">
                <div className="ai-output-header-container">
                  {apiOutput ? null : (
                    <div className="ai-output-header">
                      <h3>Output</h3>
                    </div>
                  )}
                  
                </div>
                <div className="ai-output-content">
                  <p>{apiOutput}</p>
                </div>
            </div>
            <div className="ai-copy-button">
                  <CopyToClipboard text={apiOutput}>
                    <button>Copy</button>
                  </CopyToClipboard>
            </div>        
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PseudoAIPage;
