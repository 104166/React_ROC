import React from 'react';

export default class Header extends React.Component {
   render() {
      return (
         <div>
            <div className="container">
                <div className="menu" >
                    <div id="logo" className="pull-left">
                        <a href="#roc"><img src="icons/logo.png" alt="" title="" /></a>
                    </div>
                <nav id="nav-menu" className="pull-right">
                    <ul className="nav-menu">
                        <li className="menu-active homelink"><a href="index.html">HOME</a></li>
                        <li className="productlink"><a href="#">PRODUCTS</a></li>
                        <li className="lenderslink"><a href="#">LENDERS</a></li>
                        <li className="investorslink"><a href="#">INVESTORS</a></li>
                        <li className="borrowlink"><a href="#">BORROWERS</a></li>
                        <li className="technologylink"><a href="#">TECHNOLOGY</a></li>
                        <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                    </ul>
                </nav>
                </div>
            </div>
         </div>
      );
   }
}