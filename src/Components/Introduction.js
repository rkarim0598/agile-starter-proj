import React from 'react';
import { Typography, Button } from '@material-ui/core';
import '../css/Introduction.css';

function Introduction(props) {
    return (
        <div class="introduction-container">
            <Typography paragraph={true} align='center' variant='h4'>The Tethical Test</Typography>
            <div className="introduction-description-text">
                <Typography align='center' variant='body1'>This test will compare your ethical values with those of prominent tech companies to see which company you align best with. Press the button below to begin the quiz!</Typography>
            </div>
            <Button variant="contained"  color="primary" onClick={() => props.setBeginQuiz(true)}>Begin Quiz</Button>
        </div>
    )
}

export default Introduction;