import React, { useState } from 'react';
import Introduction from './Components/Introduction';
import QuizQuestion from './Components/QuizQuestion';
import './App.css';

function App() {
  const [beginQuiz, setBeginQuiz] = useState(false);
  const [quizProbs, setQuizProbs] = useState([
    {
      title: 'Problem 1',
      text: 'The government...',
      answer: null,
      choices: [
        { id: '1-1', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '1-2', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '1-3', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '1-4', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
      ]
    },
    {
      title: 'Problem 2',
      text: 'IoT is the future...',
      answer: null,
      choices: [
        { id: '2-1', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '2-2', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '2-3', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '2-4', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
      ]
    },
    {
      title: 'Problem 3',
      text: 'A bigger company...',
      answer: null,
      choices: [
        { id: '3-1', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '3-2', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '3-3', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '3-4', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
      ]
    },
    {
      title: 'Problem 4',
      text: 'A competing company...',
      answer: null,
      choices: [
        { id: '4-1', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '4-2', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '4-3', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '4-4', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
      ]
    },
    {
      title: 'Problem 5',
      text: 'An important investor',
      answer: null,
      choices: [
        { id: '5-1', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '5-2', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '5-3', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '5-4', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
      ]
    },
    {
      title: 'Problem 6',
      text: 'You find out that...',
      answer: null,
      choices: [
        { id: '6-1', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '6-2', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '6-3', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '6-4', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
      ]
    },
    {
      title: 'Problem 7',
      text: 'A worker at...',
      answer: null,
      choices: [
        { id: '7-1', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '7-2', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '7-3', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '7-4', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
      ]
    },
    {
      title: 'Problem 8',
      text: 'You find that...',
      answer: null,
      choices: [
        { id: '8-1', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '8-2', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '8-3', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
        { id: '8-4', text: 'text', attributes: [0, 0, 0, 0, 0, 0] },
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
