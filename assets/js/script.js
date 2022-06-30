//Dom elements




// displays the current time rounded down to the hour
let currentTime = moment().hour()



console.log("this is the current" +currentTime)



// Save the description in the textarea w/loacal storage as value
// save fucntion that takes the hour  as a key to save in local storage. 
// save function 
var saveData = function (key, value){
    console.log(key,value)
    localStorage.setItem(key,value)
}







//conditonal fucntion evaluating the current time vs the task time "textarea id"
 function checkTime() {



  //   the actaul time of the time block
  let taskTime = $(".time-block").attr("id")
  console.log(taskTime)


 $(".time-block").each(function() { 
  
  if (currentTime > taskTime){
  
   
  $(this).addClass("past") 

  }
else if (currentTime < taskTime){

  $(this).addClass("future") 

  }
else if (currentTime == taskTime){

  $(this).addClass("present") 

  }
})
}












// Load the description  by key value reference 
$('#9 .description').val(localStorage.getItem('9'))
$('#10 .description').val(localStorage.getItem('10'))
$('#11 .description').val(localStorage.getItem('11'))
$('#12 .description').val(localStorage.getItem('12'))
$('#13 .description').val(localStorage.getItem('13'))
$('#14 .description').val(localStorage.getItem('14'))
$('#15 .description').val(localStorage.getItem('15'))
$('#16 .description').val(localStorage.getItem('16'))
$('#17 .description').val(localStorage.getItem('17'))



checkTime();




// pulls the info from the button click and saves it to local storage
$(".saveBtn").click(function (event){
    //this pulls the task info from the siblings div of the button pressed
    let taskDescription =$(this).siblings('.description').val()
    
    // this will take the data attr from the save button
    let dataID = $(this).parent().attr("id");
    

    // test data  output
    console.log(dataID)  
    console.log(taskDescription)

    //save data to local storage
    saveData(dataID,taskDescription)
    })







