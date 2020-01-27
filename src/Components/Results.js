import React, { useState, useEffect } from 'react';
import { Typography, Button } from '@material-ui/core';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
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
        res = [props.similarCompany, ...res];
        setCompanyResults(res); // update company results (this will be displayed as 'past matches' or something)
        localStorage.setItem('tethical-results', JSON.stringify(res)); // update local storage with new results
    }, [props.similarCompany]);

    const formattedData = [
        { attrib: 'Privacy', val: props.userAttribs[0] },
        { attrib: 'User Safety', val: props.userAttribs[1] },
        { attrib: 'Transparency', val: props.userAttribs[2] },
        { attrib: 'Greed', val: props.userAttribs[3] },
        { attrib: 'Efficiency', val: props.userAttribs[4] },
        { attrib: 'Employee Wellbeing', val: props.userAttribs[5] }
    ];

    return (
        <div class="results-container">
            <Typography paragraph={true} align='center' variant='h4'>You got: {props.similarCompany} </Typography>
            <div className="results-description-text">
                <Typography align='center' variant='body1'>Here are the results consistent with your answers: </Typography>
            </div>
            <Button id="thebutton" variant="contained" color="primary" align='center' onClick={() => props.resetQuiz()}>Retake Quiz</Button>
            <>
                {props.userAttribs.map((attrib, index) =>
                    <div class="att_class">{props.attribs[index]}: {attrib}</div>
                )}
            </>
            <div>
                <Typography align='center' paragraph={true} variant='h5'>Past Company Matches</Typography>
                {companyResults.slice(0, 3).map((company, index) =>
                    <Typography
                        align='center'
                        variant='body1'
                        key={index}
                    >
                        {company}
                    </Typography>
                )}
            </div>
            <RadarChart cx={150} cy={125} outerRadius={75} width={350} height={250} data={formattedData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="attrib" />
                <PolarRadiusAxis />
                <Radar name="Graph" dataKey="val" stroke="red" fill="red" fillOpacity={0.6} />
            </RadarChart>
        </div>
    )
}

export default Results;
