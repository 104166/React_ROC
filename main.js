import React from 'react';
import { Router, Route, Switch } from 'react-router';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Header from './components/Header.jsx';
import Index from './components/Index.jsx';
import Borrower from './components/Borrower.jsx';
import Borrower_dash from './components/Borrower_dash.jsx';
import Borrowerform from './components/Borrowerform.jsx';
import Investor from './components/Investor.jsx';
import Investor_dash from './components/Investor_dash.jsx';
import Loancalc from './components/Loancalc.jsx';
import Footer from './components/Footer.jsx';

ReactDOM.render(<App />, document.getElementById('app'));