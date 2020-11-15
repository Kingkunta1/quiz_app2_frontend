// const endPoint = "http://localhost:3000/api/v1/questions"

const quesButton = document.querySelector("#show-ques")

// setting a variable to equal the button
// setting the button to a specific "id" gives us access to it

// console.log(quesButton);

//
quesButton.addEventListener("click",function(e){
  // console.log(e.target)

  fetch('http://localhost:3000/api/v1/questions')
  .then(res => res.json())
  .then(questions => {

    const quesContainer = document.querySelector("#question-container")


    
    // console.log(questions)
  })
  })

// )

// const quesContainer = document.querySelector("#ques-container")
// console.log(questions);








//
// fetch('http://localhost:3000/api/v1/questions')
// .then(function(res){
//   return res.json()
//   })
//   .then(function(questions){
//
//     const quesContainer = document.querySelector("#ques-container")
//
//       console.log(questions);
// })
// })
// //

// document.addEventListener("DOMContentLoaded", () => {
//
//   fetch(endPoint)
//   .then(res => res.json())
//     .then(ques => {
//       console.log(ques);
//     })
// })


// on click , we want to load the data when the button is pressed
