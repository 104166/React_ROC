$( document ).ready(function() {

  var loanAmountInitialValue = 4021142;
  var interestInitialValue = 9;
  var renoBudgetIniValue = 20000;
  var termInitialValue = 18;

  var loanAmountVal,interestVal,renovationVal,termVal;

  var sliderTooltipLoanAmount = function(event, ui) {
      var curValue = ui.value || loanAmountInitialValue;
      var target = ui.handle || $('#loanAmount .ui-slider-handle');
      var tooltip = '<div class="slidertooltip"><div class="slidertooltip-inner">$' + curValue + '</div><div class="slidertooltip-arrow"></div></div>';
      $(target).html(tooltip);
      loanAmountVal = curValue || loanAmountInitialValue;
      calculateLoan(loanAmountVal,interestVal,renovationVal,termVal);
  }
  var sliderTooltipInterest = function(event, ui) {
      var curValue = ui.value || interestInitialValue;
      var target = ui.handle || $('#interest-rate .ui-slider-handle');
      var tooltip = '<div class="slidertooltip"><div class="slidertooltip-inner">' + curValue + ' Months</div><div class="slidertooltip-arrow"></div></div>';
     $(target).html(tooltip);
     interestVal  = curValue || interestInitialValue;
     calculateLoan(loanAmountVal,interestVal,renovationVal,termVal);
  }
  var sliderTooltipRenovation = function(event, ui) {
      var curValue = ui.value || renoBudgetIniValue;
      var target = ui.handle || $('#renovationbudget .ui-slider-handle');
      var tooltip = '<div class="slidertooltip"><div class="slidertooltip-inner">$' + curValue + '</div><div class="slidertooltip-arrow"></div></div>';
      $(target).html(tooltip);
      renovationVal = curValue || renoBudgetIniValue;
      calculateLoan(loanAmountVal,interestVal,renovationVal,termVal);
  }
  var sliderTooltipTerm = function(event, ui) {
      var curValue = ui.value || termInitialValue;
      var target = ui.handle || $('#term .ui-slider-handle');
      var tooltip = '<div class="slidertooltip"><div class="slidertooltip-inner">' + curValue + ' Months</div><div class="slidertooltip-arrow"></div></div>';
     $(target).html(tooltip);
     termVal = curValue || termInitialValue;
     calculateLoan(loanAmountVal,interestVal,renovationVal,termVal);
  }

  var calculateLoan= function(loanAmountVal,interestVal,renovationVal,termVal){
    var totalAmount = (loanAmountVal*interestVal*termVal)/1200+loanAmountVal;
    var principle = loanAmountVal;
    var interest = (loanAmountVal*interestVal*termVal)/1200;
    var percentPrincipal = (loanAmountVal*100)/totalAmount;
    var percentInterest = interest*100/totalAmount;

    $('.principalvalue').text("$ "+principle);
    $('.interestValue').text("$ "+interest);

    $("#originationCircle").remove();
    $(".donutChartContainer").append("<div id='originationCircle'></div>");
    $("#originationCircle").attr("data-dimension", "250");
    $("#originationCircle").attr("data-info", "");
    $("#originationCircle").attr("data-width", "30");
    $("#originationCircle").attr("data-fontsize", "38");
    $("#originationCircle").attr("data-fgcolor", "#61a9dc");
    $("#originationCircle").attr("data-bgcolor", "#eee");
    $("#originationCircle").attr("data-text", "$ "+totalAmount);
    $("#originationCircle").attr("data-percent", percentPrincipal.toString());
  //  $('#originationCircle').circliful();

  $('#originationCircle').circliful({

    // foreground Color
    foregroundColor: "#50ab43",

    // backgroun color
    backgroundColor: "#405371",

    // width of foreground circle border
    foregroundBorderWidth: 8,

    // width of background circle border
    backgroundBorderWidth: 8,

    // Size of point circle
    pointSize: 28.5,

    // font color
    fontColor: '#fff',

    // from 0 to 100
    //percent: 75,

    // if the circle should be animated initialy
    animation: 1,

    // how fast or slow the animation should be
    // from 0 to 100
    animationStep: 5,

    // icon size
    iconSize: '20px',

    // icon color
    iconColor: '#999',

    // top, bottom, left, right or middle
    iconPosition: 'top',

    // target percentage
    target: 0,

    // star percentage
    start: 0,

    // show percent
    showPercent: 1,

    // font size of the percentage text
    percentageTextSize: 22,

    // additonal css for the percentage text
    textAdditionalCss: '',

    // draws a circle around the main circle
    targetPercent: 0,

    // font size of the target percentage
    targetTextSize: 17,

    // fill color of the target circle
    targetColor: '#2980B9',

    // info text shown bellow the percentage in the circle
    text: null,

    // css inline style you wanna add to your info text
    textStyle: 'font-size:8px',

    // font color of the info text
    textColor: '#fff',

    multiPercentage: 0,
    percentages: null,

    // aligns string of "text" property centered below the circle
    textBelow: false,

    // to hide the percentage sign
    noPercentageSign: false,

    // replace the percentage shown in the circle by text
    replacePercentageByText: null,

    // draw half circle see example bellow
    halfCircle: false,

    // animate circle on scroll into view
    animateInView: false,

    // number of decimal places to show
    decimals: 0,

    // shows decimals while animating instead of only at the end or if less than 1
    alwaysDecimals: false

  });



  }
  $("#loanAmount").slider({
      value: loanAmountInitialValue,
      min: 75000,
      max: 10000000,
      create: sliderTooltipLoanAmount,
      slide: sliderTooltipLoanAmount
  });

  $("#term").slider({
      value: interestInitialValue,
      min: 6,
      max: 24,
      create: sliderTooltipTerm,
      slide: sliderTooltipTerm
  });
  $("#renovationbudget").slider({
      value: interestInitialValue,
      min: 6,
      max: 24,
      create: sliderTooltipRenovation,
      slide: sliderTooltipRenovation
  });
  $("#interest-rate").slider({
      value: interestInitialValue,
      min: 6,
      max: 24,
      create: sliderTooltipInterest,
      slide: sliderTooltipInterest
  });

  // $('#InterestCircle').circliful({
  //
  //   // foreground Color
  //   foregroundColor: "#50ab43",
  //
  //   // backgroun color
  //   backgroundColor: "#405371",
  //
  //   // fill color of point circle
  //   pointColor: "none",
  //
  //   // fill color
  //   fillColor: 'none',
  //
  //   // width of foreground circle border
  //   foregroundBorderWidth: 8,
  //
  //   // width of background circle border
  //   backgroundBorderWidth: 8,
  //
  //   // Size of point circle
  //   pointSize: 28.5,
  //
  //   // font color
  //   fontColor: '#fff',
  //
  //   // from 0 to 100
  //   percent: 75,
  //
  //   // if the circle should be animated initialy
  //   animation: 1,
  //
  //   // how fast or slow the animation should be
  //   // from 0 to 100
  //   animationStep: 5,
  //
  //   // font awesome icon classes
  //   icon: 'none',
  //
  //   // icon size
  //   iconSize: '20px',
  //
  //   // icon color
  //   iconColor: '#999',
  //
  //   // top, bottom, left, right or middle
  //   iconPosition: 'top',
  //
  //   // target percentage
  //   target: 0,
  //
  //   // star percentage
  //   start: 0,
  //
  //   // show percent
  //   showPercent: 1,
  //
  //   // font size of the percentage text
  //   percentageTextSize: 22,
  //
  //   // additonal css for the percentage text
  //   textAdditionalCss: '',
  //
  //   // draws a circle around the main circle
  //   targetPercent: 0,
  //
  //   // font size of the target percentage
  //   targetTextSize: 17,
  //
  //   // fill color of the target circle
  //   targetColor: '#2980B9',
  //
  //   // info text shown bellow the percentage in the circle
  //   text: null,
  //
  //   // css inline style you wanna add to your info text
  //   textStyle: 'font-size:8px',
  //
  //   // font color of the info text
  //   textColor: '#fff',
  //
  //   multiPercentage: 0,
  //   percentages: null,
  //
  //   // aligns string of "text" property centered below the circle
  //   textBelow: false,
  //
  //   // to hide the percentage sign
  //   noPercentageSign: false,
  //
  //   // replace the percentage shown in the circle by text
  //   replacePercentageByText: null,
  //
  //   // draw half circle see example bellow
  //   halfCircle: false,
  //
  //   // animate circle on scroll into view
  //   animateInView: false,
  //
  //   // number of decimal places to show
  //   decimals: 0,
  //
  //   // shows decimals while animating instead of only at the end or if less than 1
  //   alwaysDecimals: false
  //
  // // });
  // $('#originationCircle').circliful({
  //
  //   // foreground Color
  //   foregroundColor: "#50ab43",
  //
  //   // backgroun color
  //   backgroundColor: "#405371",
  //
  //   // fill color of point circle
  //   pointColor: "none",
  //
  //   // fill color
  //   fillColor: 'none',
  //
  //   // width of foreground circle border
  //   foregroundBorderWidth: 8,
  //
  //   // width of background circle border
  //   backgroundBorderWidth: 8,
  //
  //   // Size of point circle
  //   pointSize: 28.5,
  //
  //   // font color
  //   fontColor: '#fff',
  //
  //   // from 0 to 100
  //   percent: 75,
  //
  //   // if the circle should be animated initialy
  //   animation: 1,
  //
  //   // how fast or slow the animation should be
  //   // from 0 to 100
  //   animationStep: 5,
  //
  //   // font awesome icon classes
  //   icon: 'none',
  //
  //   // icon size
  //   iconSize: '20px',
  //
  //   // icon color
  //   iconColor: '#999',
  //
  //   // top, bottom, left, right or middle
  //   iconPosition: 'top',
  //
  //   // target percentage
  //   target: 0,
  //
  //   // star percentage
  //   start: 0,
  //
  //   // show percent
  //   showPercent: 1,
  //
  //   // font size of the percentage text
  //   percentageTextSize: 22,
  //
  //   // additonal css for the percentage text
  //   textAdditionalCss: '',
  //
  //   // draws a circle around the main circle
  //   targetPercent: 0,
  //
  //   // font size of the target percentage
  //   targetTextSize: 17,
  //
  //   // fill color of the target circle
  //   targetColor: '#2980B9',
  //
  //   // info text shown bellow the percentage in the circle
  //   text: null,
  //
  //   // css inline style you wanna add to your info text
  //   textStyle: 'font-size:8px',
  //
  //   // font color of the info text
  //   textColor: '#fff',
  //
  //   multiPercentage: 0,
  //   percentages: null,
  //
  //   // aligns string of "text" property centered below the circle
  //   textBelow: false,
  //
  //   // to hide the percentage sign
  //   noPercentageSign: false,
  //
  //   // replace the percentage shown in the circle by text
  //   replacePercentageByText: null,
  //
  //   // draw half circle see example bellow
  //   halfCircle: false,
  //
  //   // animate circle on scroll into view
  //   animateInView: false,
  //
  //   // number of decimal places to show
  //   decimals: 0,
  //
  //   // shows decimals while animating instead of only at the end or if less than 1
  //   alwaysDecimals: false
  //
  // });
  $("#owl-demo").owlCarousel({
    autoPlay: false,
    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    itemsMobile : [479, 1]

  });

  //click events


//   $( ".applyLoan" ).on( "click", function() {
//       $('.default-banner').hide();
//       $('#loan-calculator').show();
//
// });
});
