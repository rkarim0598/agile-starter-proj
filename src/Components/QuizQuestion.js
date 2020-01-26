import React from 'react';
import { Typography, Button, LinearProgress, makeStyles } from '@material-ui/core';
import '../css/QuizQuestion.css';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function QuizQuestion(props) {
    const classes = useStyles();

    return (
        <div class="quizquestion-container">
            <div>
                <Typography
                    align='center'
                    variant='h4'
                >
                    {props.quizProb.title}
                </Typography>
                <div className={classes.root}>
                    <LinearProgress
                        color='primary'
                        value={props.complete}
                        variant='determinate'
                    />
                </div>
            </div>
            <div className="quizquestion-text-container">
                <Typography
                    align='center'
                    variant='subheading'
                >
                    {props.quizProb.text}
                </Typography>
            </div>
            <div className="quizquestion-button-container">
                {props.quizProb.choices.map((choice, index) =>
                    <Button
                        className="quizquestion-button"
                        fullWidth={true}
                        size='large'
                        variant='contained'
                        color='primary'
                        key={index}
                        onClick={() => props.updateUserAttribs(choice.attributes)}
                    >
                        {choice.text}
                    </Button>
                )}
            </div>
        </div>
    )
}

export default QuizQuestion;