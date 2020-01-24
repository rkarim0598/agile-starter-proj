import React from 'react';
import { Typography, Button } from '@material-ui/core';
import '../css/QuizQuestion.css';

function QuizQuestion(props) {
    return (
        <div class="quizquestion-container">
            <Typography
                paragraph={true}
                align='center'
                variant='h4'
            >
                {props.quizProb.title}
            </Typography>
            <Typography
                paragraph={true}
                align='center'
                variant='subheading'
            >
                {props.quizProb.text}
            </Typography>
            <div class="quizquestion-button-container">
                {props.quizProb.choices.map((choice, index) =>
                    <Button key={index}>{choice.text}</Button>
                )}
            </div>
        </div>
    )
}

export default QuizQuestion;