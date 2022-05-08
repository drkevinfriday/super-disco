//Dom elements
// let saveBtnEl = document.querySelector("#btn9")
// let saveBtn2El = document.querySelector("#btn10")


// $(document).ready(function(){
//     console.log(allStorage)
// })



// Save the description in the textarea w/loacal storage
var saveData = function (key, value){
    console.log(key,value)
    localStorage.setItem(key,value)
}


// Load the description in the textarea w/loacal storage on start of page
// var  allStorage= function(){

//     var archive = {}, // Notice change here
//         keys = Object.keys(localStorage),
//         i = keys.length;

//     while ( i-- ) {
//         archive[ keys[i] ] = localStorage.getItem( keys[i] );
//     }

//     console.log(archive)
//     return archive;

   
// }


// for(var i = 0, )


$('#9 .description').val(localStorage.getItem('9'))
$('#10 .description').val(localStorage.getItem('10'))
$('#11 .description').val(localStorage.getItem('11'))
$('#12 .description').val(localStorage.getItem('12'))
$('#13 .description').val(localStorage.getItem('13'))
$('#14 .description').val(localStorage.getItem('14'))
$('#15 .description').val(localStorage.getItem('15'))
$('#16 .description').val(localStorage.getItem('16'))
$('#17 .description').val(localStorage.getItem('17'))






// dom elements for the save button

//conditonal fucntion evaluating the current time vs the task time "textarea  id"
// this should run on load
// use a for loop
// queryselectall creates an array of item to loop through in the conditional function

// save fucntion that takes the  hour of the as a keyvalue to save in local storage. 
// save function 





// pulls the info from the button click and saves it to local storage
$(".saveBtn").click(function (event)

 {
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

// runs the the handle button once save is pressed
// saveBtnEl.addEventListener("click", handleBtnClick);
// saveBtn2El.addEventListener("click", handleBtnClick);





