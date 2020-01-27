import React from 'react';
import { Typography, Button } from '@material-ui/core';
import '../css/Results.css';
// import scores from App.js
// import names from App.js

function Results(props) {
    return (
        <div class="results-container">
            <Typography paragraph={true} align='center' variant='h4'>You got: insert company name result here. </Typography>
            <div className="results-description-text">
                <Typography align='center' variant='body1'>Here are the results consistent with your answers: </Typography>
            </div>
            <Button variant="contained"  color="primary" align='center' onClick={() =>  props.setCurrQuestion(0)}>Retake Quiz</Button>
        <>
        {props.userAttribs.map((attrib, index) =>
            <div>{props.attribs[index]}: {attrib}</div>
                         )}
        </>
        </div>
    )
}

export default Results;