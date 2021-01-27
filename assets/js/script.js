$(document).ready(function () {


    // get date from Moment
    const now = moment().format('MMMM Do YYYY');

    // getting current hour from Moment
    let nowHour = moment().format('h');

    //setting current date in header
    let dateHeading = $('#current-date');
    dateHeading.text(now);

    let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));
  
    // If plans were retrieved from localStorage, update the plan array to it
    if (storedPlans !== null) {
      planTextArray = storedPlans;
    } else {
      planTextArray = new Array(8);
    }

    $("input").each(function(i){
      this.text("testing")
    });


});