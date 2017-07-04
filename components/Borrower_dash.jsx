
import React from 'react';

export default class Borrower_dash extends React.Component {
   render() {
      return (
         <div> 
            <section className="subheader">
                    <div className="container">
                        <div className="menu" >
                            <div className="user">

                            </div>
                            <nav id="nav-menu" >
                              <ul className="nav-menu pull-left" >
                                  <li><a href="#" style="color:#fff;">HELLO PATRIK GODWIN</a></li>
                                </ul>
                                <ul className="nav-menu pull-right">

                                    <li><a href="#">MY PROFILE</a></li>
                                    <li><a href="#" className="li-active">DASHBOARD</a></li>
                                    <li><a href="#" target="_self">APPLY A NEW LOAN</a></li>
                                    <li><a href="#">UPLOAD</a></li>
                                    <li><a href="#">NOTIFICATIONS</a></li>
                                    <li><a href="#"><i className="fa fa-sign-out" aria-hidden="true"></i></a></li>
                                </ul>
                        </nav>
                        </div>
                    </div>
                </section>

                    <section className="dashboard-section">
                  <div className="container">
                  <div className="row">
                   <div className="col-sm-12 padding0">
                             <div className="col-md-4 padding-left0">
                                 <div className="data">
                                     <h3 className="dat-number">2</h3>
                                     <span className="below-data">Approved Loan</span>
                                     <span className="ic_1"></span>
                                 </div>
                                 <div className="sticker green">
                                     <span className="pull-left">REJECTED LOAN IN THe PAST</span>
                                     <span className="pull-right">0</span>
                                 </div>
                             </div>
                             <div className="col-md-4">
                                 <div className="data">
                                     <h3 className="dat-number">13</h3>
                                     <span className="below-data gold-text">Documents to Upload </span>
                                     <span className="ic_4"></span>
                                 </div>
                                 <div className="sticker gold">
                                     <span className="pull-left">DOCUMENTS UPLOAD SO FAR</span>
                                     <span className="pull-right">5</span>
                                 </div>
                             </div>
                             <div className="col-md-4 padding-right0">
                                 <div className="data">
                                     <h3 className="dat-number red-text">2</h3>
                                     <span className="below-data red-text">New Message(s)</span>
                                     <span className="ic_5"></span>
                                 </div>
                                 <div className="sticker red">
                                     <span className="pull-left">No. OF UNREAD MESSAGES</span>
                                     <span className="pull-right">11</span>
                                 </div>
                             </div>
                             <div className="col-md-6 pad-top">
                                 <div className="col-md-12 bg-wt">
                                     <div className="circle-tab" style="animation-delay: -40s">
                                         <div className="in-circle"> Total invesments <span className="inside-circle"> $ 20,000</span> </div>
                                     </div>
                                     <div className="col-md-12 pad-top1">
                                     <div className="border-botm">
                                     <table>
                                        <tbody>
                                            <tr>
                                                <td className="box-width"> <span className="box green"></span> </td>
                                                <td className="first-width"> <span className="text-name"> Residential Loan</span> </td>
                                                <td className="second-width"> <span className="text-name">60%</span> </td>
                                                <td className="last-width"> <span className="text-name">$12,000</span> </td>
                                            </tr>
                                        </tbody>
                                     </table>


                                     </div>


                                 </div>

                                 <div className="col-md-12">
                                 <div className="border-none">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="box-width"><span className="box gold"></span></td>
                                                <td className="first-width"> <span className="text-name"> Commercial loan</span> </td>
                                                <td className="second-width"> <span className="text-name">40%</span> </td>
                                                <td className="last-width"> <span className="text-name">$8,000</span> </td>
                                            </tr>
                                        </tbody>
                                     </table>
                                 </div>



                                 </div>
                                 </div>


                             </div>
                             <div className="col-md-6 pad-top">
                                 <div className="col-md-12 bg-wt">
                                     <div className="circle-tab1" style="animation-delay: -60s">
                                         <div className="in-circle"> Amount <span className="inside-circle">usage</span> </div>
                                     </div>
                                     <div className="col-md-12 pad-top1">
                                     <div className="border-botm">

                                     <table>
                                        <tbody>
                                            <tr>
                                                <td className="box-width"><span className="box gold"></span></td>
                                                <td className="first-width"><span className="text-name"> Used in Construction</span></td>
                                                <td className="second-width"><span className="text-name">60%</span></td>
                                                <td className="last-width"><span className="text-name">$12,000</span></td>
                                            </tr>
                                        </tbody>
                                     </table>
                                         </div>
                                 </div>
                                     <div className="col-md-12">
                             <div className="border-none">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="box-width"><span className="box sred"></span></td>
                                            <td className="first-width"><span className="text-name"> Unused Amount</span></td>
                                            <td className="second-width"><span className="text-name">40%</span></td>
                                            <td className="last-width"><span className="text-name">$8,000</span></td>
                                        </tr>
                                    </tbody>
                                 </table>
                             </div>
                            </div>
                                 </div>

                       </div>
                             </div>
                         </div>
                 </div>
               </section>
                  <footer id="footer">
                  <div className="chat-container">
                     <div className="chat-header">
                        <button className="btn btn-primary" type="button">
                          <span className="chat-icon"><img src="images/chat.png" alt="chat icon"/></span>Chat Here! <span className="glyphicon glyphicon-menu-up chat-arrow"></span>
                        </button>
                     </div>
                     <div className="chat-body">
                        <p>We live ready to chat with you now. Say something to start a live chat</p>
                        <p className="padding0"><span className="glyphicon glyphicon-arrow-down"></span></p>
                        <div className="chat-area">
                           <div className="chat-row1"><input type="text" name="chat" placeholder="Type here and press enter"/><span className="glyphicon glyphicon-thumbs-up"></span><span className="glyphicon glyphicon-thumbs-down"></span></div>
                           <div className="chat-row2"><span className="glyphicon glyphicon-volume-up"></span><span className="glyphicon glyphicon-envelope"></span><span className="glyphicon glyphicon-paperclip"></span></div>
                        </div>
                     </div>
                  </div>
                   <div className="container">
                       <div className="row">
                           <div className="col-md-12">
                               <div className="copyright">
                                   (212) 607-8333 | 40 W 57th St, New York, NY 10019, USA | Â© 2016 by Roc Capital
                               </div>
                           </div>
                       </div>
                   </div>
               </footer>
    </div>
      );
   }
}