import React, { useState } from 'react';
import Introduction from './Components/Introduction';
import QuizQuestion from './Components/QuizQuestion';
import './App.css';

function App() {
  const [beginQuiz, setBeginQuiz] = useState(false);
  const [quizProbs, setQuizProbs] = useState([
    {
      title: 'Problem 1',
      text: 'blahbla blah blah blah blha blha bla bla blah blah bla. Blah blah blah, or blah blah blah?',
      answer: null,
      choices: [
        { id: '1-1', text: 'ANSWER 1', image: '' },
        { id: '1-2', text: 'ANSWER 2', image: '' },
        { id: '1-3', text: 'ANSWER 3', image: '' },
        { id: '1-4', text: 'ANSWER 4', image: '' },
      ]
    }
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
          />
        }
      </div>
    </div>
  );
}

export default App;
