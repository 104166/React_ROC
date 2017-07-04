import React from 'react';
import { Router, Route, Switch } from 'react-router';
import Header from './components/Header.jsx';
import Index from './components/Index.jsx';
import Borrower from './components/Borrower.jsx';
import Borrower_dash from './components/Borrower_dash.jsx';
import Borrowerform from './components/Borrowerform.jsx';
import Investor from './components/Investor.jsx';
import Investor_dash from './components/Investor_dash.jsx';
import Loancalc from './components/Loancalc.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
           <Index />
            <Borrower/>
           
            <Borrowerform />
            <Investor />
            <Investor_dash />
            <Loancalc />
              <Footer/>
         </div>
      );
   }
}

export default App;
 