import React, { useState } from 'react';
import Introduction from './Components/Introduction';
import QuizQuestion from './Components/QuizQuestion';
import './App.css';

function App() {
  const [beginQuiz, setBeginQuiz] = useState(false);
  const [quizProbs, setQuizProbs] = useState([
    {
      title: 'Problem 1',
      text: "The government comes to you with the desire to place a backdoor in your program. They hope to use this technology to catch terrorists before they’re able to enact their plots. However, you have concerns that the government could use this for other, more nefarious ideas. What do you tell them?",
      answer: null,
      choices: [
        { id: '1-1', text: "Install the backdoor; the country’s safety is important.", attributes: [-1,-1,-1,0,0,0] },
        { id: '1-2', text: "Install the backdoor; perhaps this could lead to more government funding.", attributes: [-1,-1,-1,1,0,0] },
        { id: '1-3', text: "Don’t install the backdoor; customer privacy is essential to the company.", attributes: [1,1,1,0,0,0] },
        { id: '1-4', text: "Don’t install the backdoor; you never liked the government anyways.", attributes: [1,1,0,0,0,0] },
      ]
    },
    {
      title: 'Problem 2',
      text: "IoT is the future. Your company has the chance to jump in on the “smart fridge” craze, giving your customers the chance to update fridge settings from their couch. Your boss is thrilled by this idea, yet initial tests show that the technology can very easily be hacked. With a potential promotion at stake and your boss wanting results, what do you do?",
      answer: null,
      choices: [
        { id: '2-1', text: "Release the product; who would hack a fridge?", attributes: [-1,-1,-1,1,1,0] },
        { id: '2-2', text: "Delay the release of the product to make sure it’s more secure", attributes: [1,1,1,-1,0,0] },
        { id: '2-3', text: "Scrap the project; smart fridges aren’t worth the potential PR headache", attributes: [0,0,0,-1,-1,0] },
      ]
    },
    {
      title: 'Problem 3',
      text: "A bigger company has just bought out the company you worked at previously and insist you drop Linux support.  Do you be a jerk and cut off support, or do you resist this?",
      answer: null,
      choices: [
        { id: '3-1', text: "Drop Linux support, nobody uses it anyway", attributes: [0,-1,-1,1,0,0] },
        { id: '3-2', text: "Keep Linux support, they’ve been a loyal customer base", attributes: [0,0,1,-1,0,0] },
        { id: '3-3', text: "Drop Linux support, WINE and other technologies will allow most users to still use the product", attributes: [0,0,-1,1,1,0] },
      ]
    },
    {
      title: 'Problem 4',
      text: "A competing company has developed a more efficient airplane engine design. Your boss decides to follow suit, but your company’s designs fit badly, so it’s up to you to build software that keeps the plane level when in the air. With your job on the line, your deadline is nearly here, but there is no time to rigorously test your code - do you:",
      answer: null,
      choices: [
        { id: '4-1', text: "Ask for more time to test, and risk losing your job", attributes: [0,2,1,-1,-1,0] },
        { id: '4-2', text: "Let the planes be produced with unsafe software", attributes: [0,-2,-1,1,0,0] },
        { id: '4-3', text: "Tell your boss the situation and let him decide (given that you know he is likely to skip testing)", attributes: [0,-1,1,0,0,1]},
        { id: '4-4', text: "Lie about an illness or otherwise stall until you can covertly finish testing", attributes: [0,1,-1,1,-1,0] },
      ]
    },
    {
      title: 'Problem 5',
      text: "An important investor comes to the startup you’re working at and is willing to invest a large sum into the company.  However, you find out that the investor has been told that your product has more features than it currently has.  How do you react?",
      answer: null,
      choices: [
        { id: '5-1', text: "Hurry to complete those promised features ASAP", attributes: [0,-1,1,1,1,-1] },
        { id: '5-2', text: "Stand up to management who made false statements", attributes: [0,1,0,0,-1,1] },
        { id: '5-3', text: "Tell the investor the truth", attributes: [0,1,2,-1,0,0] },
        { id: '5-4', text: "Quit", attributes: [0,0,0,-1,-1,0] },
      ]
    },
    {
      title: 'Problem 6',
      text: "You find out that the company you’ve been working at has been storing passwords in plaintext.  You bring it up to higher-ups, but they say this is not an important issue -- we can address it when things slow down.  How do you respond?",
      answer: null,
      choices: [
        { id: '6-1', text: "Pester higher-ups and higher-higher-ups until refactoring password storage is prioritized", attributes: [1,1,1,0,-1,0] },
        { id: '6-2', text: "Take management at their word", attributes: [-1,-1,-1,0,1,0] },
        { id: '6-3', text: "Spread the word of the issue to colleagues at your company", attributes: [0,1,0,0,-1,1] },
      ]
    },
    {
      title: 'Problem 7',
      text: "A worker at a company that you are the CEO of writes a controversial memo that alienates many people at the company.  How do you initially respond?",
      answer: null,
      choices: [
        { id: '7-1', text: "Fire the author and release a statement repudiating the views expressed in the memo", attributes: [0,0,1,-1,0,1] },
        { id: '7-2', text: "Talk to a few workers about the memo and do nothing else", attributes: [0,0,0,1,1,-1] },
        { id: '7-3', text: "Have an all-hands meeting and discuss the issue with everyone", attributes: [0,0,0,0,1,1] },
        { id: '7-4', text: "Remove the ability for workers to send memos that can be read by people at the company", attributes: [1,0,-1,1,0,-1] },
      ]
    },
    {
      title: 'Problem 8',
      text: "You find that your company has been working with the NSA in a way which excessively violates company privacy policies. As a new hire, you don’t have a lot of clout, and worry that trying to expose such a violation could get you into trouble with your employers, or even the government itself. What will you do?",
      answer: null,
      choices: [
        { id: '8-1', text: "Ignore your findings, and pretend you never knew of any privacy violations", attributes: [-1,0,-1,1,0,1] },
        { id: '8-2', text: "Take these findings to your employers and explain your concerns", attributes: [1,0,0,-1,0,0] },
        { id: '8-3', text: "Take these findings to the press, and make as many headlines as possible with interviews", attributes: [1,0,1,0,-1,-1] },
        { id: '8-4', text: "Take these findings to the press anonymously, and hope your employers never find out that you were the leaker", attributes: [1,0,0,0,-1,1] },
      ]
    },
  ])

  const [currQuestion, setCurrQuestion] = useState(0);
  const [userAttribs, setUserAttribs] = useState([5, 5, 5, 5, 5, 5]);

  const incrementCurrQuestion = () => {
    setCurrQuestion(currQuestion + 1);
  }

  const updateUserAttribs = (update) => {
    const newUserAttribs = update.map((val, index) => userAttribs[index] + val);
    setUserAttribs(newUserAttribs);
    incrementCurrQuestion();
  }

  return (
    <div className="App">
      <div className="text-container">
        {!beginQuiz ?
          <Introduction setBeginQuiz={setBeginQuiz} />
          :
          <>
            {currQuestion < quizProbs.length ?
              <QuizQuestion
                setQuizProbs={setQuizProbs}
                quizProb={quizProbs[currQuestion]}
                updateUserAttribs={updateUserAttribs}
                complete={currQuestion / quizProbs.length * 100}
              />
              :
              <div>FINITO</div> // @Zach your results page component would go here
            }
          </>
        }
      </div>
    </div>
  );
}

export default App;
