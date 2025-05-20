import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Result.css';

function Result() {
    const { state } = useLocation();

    // Inline style for background image from public folder
    const backgroundStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/output.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh', // ensures full viewport height
        padding: '20px'
    };

    return ( 
        <div style = { backgroundStyle }>
        <div className = "container">
        <div className = "last">
        <h1> Rainfall Output Page </h1> 
        <h2 id = "dt" > DT accuracy output = <label> { state.accuracy_1 } </label></h2>
        <h2 id = "xg" > XG accuracy output = { state.accuracy_2 } </h2> 
        <h2> Predicted output = <label> { state.final } </label></h2> 
        {
            state.v_h_r_1 && <h2> { state.v_h_r_1 } </h2>} 
            {
                state.h_r_1 && <h2> { state.h_r_1 } </h2>} 
            {
                state.s_s_1 && <h2> { state.s_s_1 } </h2>} 
            {
                state.m_s_1 && <h2> { state.m_s_1 } </h2>} 
            <Link to = "/" >
            <input type = "button" value = "Back" />
            </Link> 
            </div> 
            </div> 
            </div>
    );
}

export default Result;