import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from "react";

import Menu from './Components/Menu';
import HomePage from './Components/HomePage';
import DriftPage from './Components/DriftPage';
import ForzaPage from './Components/ForzaPage';
import TimeAttackPage from './Components/TimeAttackPage';


export default function App() {
    return (
        <Router>
            <div>
                <Menu />
                <div className="page">
                    <Route path="/" exact component={HomePage} />
                    <Route path="/drift" component={DriftPage} />
                    <Route path="/timeattack" component={TimeAttackPage} />
                    <Route path="/forza" component={ForzaPage} />
                </div>
            </div>
        </Router>
    );
}