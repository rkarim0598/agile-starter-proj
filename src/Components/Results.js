import React, { useState, useEffect } from 'react';
import { Typography, Button } from '@material-ui/core';
import '../css/Results.css';
// import scores from App.js
// import names from App.js

function Results(props) {
    const [companyResults, setCompanyResults] = useState([]);

    // this will run right when you get to the results page
    useEffect(() => {
        // get past results from local storage
        let res = JSON.parse(localStorage.getItem('tethical-results'));
        res = res === null ? [] : res;

        // substitute 'Amazon' for whatever company is deemed to be closest to user values
        res = ['Amazon', ...res];
        setCompanyResults(res); // update company results (this will be displayed as 'past matches' or something)
        localStorage.setItem('tethical-results', JSON.stringify(res)); // update local storage with new results
    }, []);

    return (
        <div class="results-container">
            <Typography paragraph={true} align='center' variant='h4'>You got: insert company name result here. </Typography>
            <div className="results-description-text">
                <Typography align='center' variant='body1'>Here are the results consistent with your answers: </Typography>
            </div>
            <Button variant="contained" color="primary" align='center' onClick={() => props.resetQuiz()}>Retake Quiz</Button>
            <>
                {props.userAttribs.map((attrib, index) =>
                    <div>{props.attribs[index]}: {attrib}</div>
                )}
            </>
            <div>
                <Typography align='center' paragraph={true} variant='h5'>Past Company Matches</Typography>
                {companyResults.slice(0, 3).map(company =>
                    <Typography
                        align='center'
                        variant='body1'
                        key={company}
                    >
                        {company}
                    </Typography>
                )}
            </div>
        </div>
    )
}

export default Results;