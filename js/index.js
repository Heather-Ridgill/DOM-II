// Your code goes here
// Event Listener

//MAKES A POP UP ALERT WHEN ANYTHING IN THE NAV BAR IS CLICKED
let NavBar = document.querySelector('.nav');
NavBar.addEventListener('click', (event) => {
  alert('You Clicked the Navigation Bar!')
})

//CHANGES THE FIRST 'WELCOME TO FUN BUS' RED WHEN HOVER OR MOUSE OVER
const intro = document.querySelector('.intro');
intro.addEventListener ('mouseover', (event) => {
    intro.style.background= "red";
})

//MAKES THE 2 PARAGRAPHS IN 'LETS GO' SECTION BLUE WHEN DOUBLE CLICKED
let textcontent = document.querySelector('.text-content');
textcontent.addEventListener('dblclick', (event) => { 
    event.target.style.backgroundColor = 'blue'; 
});

 // INCREASE SIZE OF LOGO HEADING ON MOUSEOVER
const navLogoHeading = document.querySelector('.logo-heading');
navLogoHeading.addEventListener("mouseover", (e) => e.target.style.transform = "scale(1.5)");

//CHANGE 1ST (LEFT) BUTTONS COLOR
 const buttons = document.querySelector(".btn");
 buttons.addEventListener("dblclick", (e) => {
    e.target.style.backgroundColor = 'chocolate';
  });

   // DRAG THE FUN-BUS INTRO IMAGE TO SCALE IT 150% IN SIZE
  const funBusBanner = document.querySelector(".intro > img" );
    funBusBanner.addEventListener('drag', (e) => e.target.style.transform = 'scale(1.5)');
  
    // ALERTS OUCH WHENEVER THE WINDOW IS RESIZED
  window.addEventListener('resize', () => alert("OUCHHHH!!!!"))


//   const button = document.querySelector('.destination .btn');
//   button.addEventListener("click", function(event){
//     event.stopPropagation()
//     console.log(event)
//     button.classList.toggle('Heathers-Class');
//     img.style.display = "none";
//     if(button.textContent === "Sign me up!"){
//       button.textContent = "NEVER!"
//     } else {
//       button.textContent = "Sign me up!"
//     }
//   });

//   let dragged = '';

//  document.addEventListener('drag', event => {

//  });

// document.addEventListener('dragstart', event => {
//     dragged = event.target;
//     event.target.style.opacity = 0.6;
// });
// document.addEventListener('dragend', event => {
//     event.target.style.opacity = '';
// });

// document.addEventListener('dragover', event => {
//     event.preventDefault();
// });
  


// let FunBusPic = document.querySelector('.intro src');
// FunBusPic.addEventListener('scroll', (event) => {
//  event.target.
// })

//   console.log(event)


// navLinks.forEach(link => {
//     link.addEventListener('mouseover' ,() => {
//         link.classlist.add('navLinkColor');   
//     })    
// });