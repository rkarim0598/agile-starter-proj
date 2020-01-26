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
      choices: [
        { id: '1-1', text: "Install; the country’s safety is important.", attributes: [-1, -1, -1, 0, 0, 0] },
        { id: '1-2', text: "Install; more government funding perhaps?", attributes: [-1, -1, -1, 1, 0, 0] },
        { id: '1-3', text: "Don’t install; customer privacy is important.", attributes: [1, 1, 1, 0, 0, 0] },
        { id: '1-4', text: "Don’t install; fight the power!", attributes: [1, 1, 0, 0, 0, 0] },
      ]
    },
    {
      title: 'Problem 2',
      text: "IoT is the future. Your company has the chance to jump in on the “smart fridge” craze, giving your customers the chance to update fridge settings from their couch. Your boss is thrilled by this idea, yet initial tests show that the technology can very easily be hacked. With a potential promotion at stake and your boss wanting results, what do you do?",
      choices: [
        { id: '2-1', text: "Release product; who would hack a fridge?", attributes: [-1, -1, -1, 1, 1, 0] },
        { id: '2-2', text: "Delay release of product to ensure security", attributes: [1, 1, 1, -1, 0, 0] },
        { id: '2-3', text: "Scrap project; not worth potential PR headache", attributes: [0, 0, 0, -1, -1, 0] },
      ]
    },
    {
      title: 'Problem 3',
      text: "A bigger company has just bought out the company you worked at previously and insist you drop Linux support.  Do you be a jerk and cut off support, or do you resist this?",
      choices: [
        { id: '3-1', text: "Drop Linux support, nobody uses it anyway", attributes: [0, -1, -1, 1, 0, 0] },
        { id: '3-2', text: "Keep Linux support, they’ve been a loyal customer base", attributes: [0, 0, 1, -1, 0, 0] },
        { id: '3-3', text: "Drop Linux support, can use WINE to make it work, probably", attributes: [0, 0, -1, 1, 1, 0] },
      ]
    },
    {
      title: 'Problem 4',
      text: "A competing company has developed a more efficient airplane engine design. Your boss decides to follow suit, but your company’s designs fit badly, so it’s up to you to build software that keeps the plane level when in the air. With your job on the line, your deadline is nearly here, but there is no time to rigorously test your code - do you:",
      choices: [
        { id: '4-1', text: "Ask for more time to test, and risk losing your job", attributes: [0, 2, 1, -1, -1, 0] },
        { id: '4-2', text: "Let planes be produced with unsafe software", attributes: [0, -2, -1, 1, 0, 0] },
        { id: '4-3', text: "Tell boss the situation and let him decide (he is likely to skip testing)", attributes: [0, -1, 1, 0, 0, 1] },
        { id: '4-4', text: "Lie about illness/stall until you covertly finish testing", attributes: [0, 1, -1, 1, -1, 0] },
      ]
    },
    {
      title: 'Problem 5',
      text: "An important investor comes to the startup you’re working at and is willing to invest a large sum into the company.  However, you find out that the investor has been told that your product has more features than it currently has.  How do you react?",
      choices: [
        { id: '5-1', text: "Hurry to complete those promised features ASAP", attributes: [0, -1, 1, 1, 1, -1] },
        { id: '5-2', text: "Stand up to management who made false statements", attributes: [0, 1, 0, 0, -1, 1] },
        { id: '5-3', text: "Tell the investor the truth", attributes: [0, 1, 2, -1, 0, 0] },
        { id: '5-4', text: "Quit", attributes: [0, 0, 0, -1, -1, 0] },
      ]
    },
    {
      title: 'Problem 6',
      text: "You find out that the company you’ve been working at has been storing passwords in plaintext.  You bring it up to higher-ups, but they say this is not an important issue -- we can address it when things slow down.  How do you respond?",
      choices: [
        { id: '6-1', text: "Pester until refactoring password storage is prioritized", attributes: [1, 1, 1, 0, -1, 0] },
        { id: '6-2', text: "Take management at their word", attributes: [-1, -1, -1, 0, 1, 0] },
        { id: '6-3', text: "Spread the word of the issue to colleagues at your company", attributes: [0, 1, 0, 0, -1, 1] },
      ]
    },
    {
      title: 'Problem 7',
      text: "A worker at a company that you are the CEO of writes a controversial memo that alienates many people at the company.  How do you initially respond?",
      choices: [
        { id: '7-1', text: "Fire author and release statement repudiating the memo's views", attributes: [0, 0, 1, -1, 0, 1] },
        { id: '7-2', text: "Talk to a few workers about the memo and do nothing else", attributes: [0, 0, 0, 1, 1, -1] },
        { id: '7-3', text: "Have an all-hands meeting and discuss the issue with everyone", attributes: [0, 0, 0, 0, 1, 1] },
        { id: '7-4', text: "Don't allow workers to send non-work related memos", attributes: [1, 0, -1, 1, 0, -1] },
      ]
    },
    {
      title: 'Problem 8',
      text: "You find that your company has been working with the NSA in a way which excessively violates company privacy policies. As a new hire, you don’t have a lot of clout, and worry that trying to expose such a violation could get you into trouble with your employers, or even the government itself. What will you do?",
      choices: [
        { id: '8-1', text: "Ignore findings, pretend you didn't see anything", attributes: [-1, 0, -1, 1, 0, 1] },
        { id: '8-2', text: "Take findings to employers and explain your concerns", attributes: [1, 0, 0, -1, 0, 0] },
        { id: '8-3', text: "Take findings to press, make headlines with interviews", attributes: [1, 0, 1, 0, -1, -1] },
        { id: '8-4', text: "Take findings to press anonymously, hope you're not caught", attributes: [1, 0, 0, 0, -1, 1] },
      ]
    },
  ])

  const [currQuestion, setCurrQuestion] = useState(0);
  const [userAttribs, setUserAttribs] = useState([5, 5, 5, 5, 5, 5]);

  const attribs = ['Privacy', 'User Safety', 'Transparency', 'Greed', 'Efficiency', 'Employee Wellbeing'];

  const updateUserAttribs = (update) => {
    const newUserAttribs = update.map((val, index) => userAttribs[index] + val);
    setUserAttribs(newUserAttribs);
    setCurrQuestion(currQuestion + 1);
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
              <>
                <div>FINITO</div>
                {userAttribs.map((attrib, index) =>
                  <div>{attribs[index]}: {attrib}</div>
                )}
              </>
            }
          </>
        }
      </div>
    </div>
  );
}

export default App;
