$(document).ready(function () {


  // get date from Moment
  const now = moment().format('MMMM Do YYYY');

  // getting current hour from Moment
  let nowHour = parseInt(moment().format('k'));
  
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

//function to render plans dynamically
  function renderSchedule() {
    
    //sort through each input
    $("input").each(function (i) {
      let hour = i + 9;

      //set color of background based on time
      if (nowHour === hour) {
        $(this).addClass("present")
      }
      else if (nowHour < hour) {
        $(this).addClass("future");
      }
      else {
        $(this).addClass("past");
      }

      //if index of array is not empty, render text
      if (planTextArray[i] !== undefined) {
        this.value = planTextArray[i];
      }
      else{
        this.value="";
      }
    });
  }

  //function to save text to local storage
  $("button").on("click", function () {
    let buttonClicked = parseInt(this.value);
    $("input").each(function (i) {
      index=parseInt(i);
      if (index === buttonClicked) {
        planTextArray[i] = this.value;
        console.log(planTextArray[i]);
        localStorage.setItem("storedPlans", JSON.stringify(planTextArray));
      }
    });

  });

  //call function to render the schedule display
  renderSchedule();

});