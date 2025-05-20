import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Result from './components/Result';
import './App.css';

function App() {
    return ( <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < Form / > }
        /> <
        Route path = "/result"
        element = { < Result / > }
        /> <
        /Routes> <
        /Router>
    );
}

export default App;