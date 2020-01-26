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
      text: 'IoT is the future...',
      answer: null,
      choices: [
        { id: '2-1', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '2-2', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '2-3', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '2-4', text: 'text', attributes: [0,0,0,0,0,0] },
      ]
    },
    {
      title: 'Problem 3',
      text: 'A bigger company...',
      answer: null,
      choices: [
        { id: '3-1', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '3-2', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '3-3', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '3-4', text: 'text', attributes: [0,0,0,0,0,0] },
      ]
    },
    {
      title: 'Problem 4',
      text: 'A competing company...',
      answer: null,
      choices: [
        { id: '4-1', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '4-2', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '4-3', text: 'text', attributes: [0,0,0,0,0,0]},
        { id: '4-4', text: 'text', attributes: [0,0,0,0,0,0] },
      ]
    },
    {
      title: 'Problem 5',
      text: 'An important investor',
      answer: null,
      choices: [
        { id: '5-1', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '5-2', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '5-3', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '5-4', text: 'text', attributes: [0,0,0,0,0,0] },
      ]
    },
    {
      title: 'Problem 6',
      text: 'You find out that...',
      answer: null,
      choices: [
        { id: '6-1', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '6-2', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '6-3', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '6-4', text: 'text', attributes: [0,0,0,0,0,0] },
      ]
    },
    {
      title: 'Problem 7',
      text: 'A worker at...',
      answer: null,
      choices: [
        { id: '7-1', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '7-2', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '7-3', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '7-4', text: 'text', attributes: [0,0,0,0,0,0] },
      ]
    },
    {
      title: 'Problem 8',
      text: 'You find that...',
      answer: null,
      choices: [
        { id: '8-1', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '8-2', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '8-3', text: 'text', attributes: [0,0,0,0,0,0] },
        { id: '8-4', text: 'text', attributes: [0,0,0,0,0,0] },
      ]
    },
  ])
  const [currQuestion, setCurrQuestion] = useState(0);

  const incrementCurrQuestion = () => {
    setCurrQuestion(currQuestion + 1);
  }

  const updateQuizProb = (index, answer) => {
    const update = { ...quizProbs[index], [answer]: answer };
    setQuizProbs([...quizProbs, update]);
    incrementCurrQuestion();
    console.log(quizProbs);
  }

  return (
    <div className="App">
      <div className="text-container">
        {!beginQuiz ?
          <Introduction setBeginQuiz={setBeginQuiz} />
          :
          <QuizQuestion
            setQuizProbs={setQuizProbs}
            quizProb={quizProbs[currQuestion]}
            updateQuizProb={updateQuizProb}
            complete={currQuestion/quizProbs.length}
          />
        }
      </div>
    </div>
  );
}

export default App;
