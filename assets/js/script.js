//Dom elements
var saveBtnEl = document.querySelector(".saveBtn")







var timeData = $(".hour").data().time // this accees the data element in the time-block div

var textdata = $(".description").val() // this is the info in the text area 




// Save the description in the textarea w/loacal storage


// Load the description in the textarea w/loacal storage on start of page

// dom elements for the save button

//conditonal fucntion evaluating the current time vs the task time "textarea  id"
// this should run on load
// use a for loop
// queryselectall creates an array of item to loop through in the conditional function

// save fucntion that takes the  hour of the as a keyvalue to save in local storage. 
// save function 


// this function gets the hour data from the 
var getHourFunc = function(){
    console.log("Time data")
    console.log(timeData)
      //returns the time for div being accessed
    return this.timeData
    // console.log("This works")
}
// this function gets the data from the textarea 
var getTextFunc = function(){
    console.log("Text area data")
    console.log(textdata)
    //returns the text for div being accessed
    return this.textdata
    // console.log("This works")
}


// this runs gethour and gettext
saveBtnEl.addEventListener("click",() => {
    getHourFunc();
    getTextFunc();
})



