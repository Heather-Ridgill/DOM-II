// Your code goes here
// Event Listener

let NavBar = document.querySelector('.nav');
NavBar.addEventListener('click', (event) => {
  alert('You Clicked the Navigation Bar!')
})

const intro = document.querySelector('.intro');
intro.addEventListener ('mouseover', (event) => {
    intro.style.background= "red";
})

let textcontent = document.querySelector('.text-content');
textcontent.addEventListener('dblclick', (event) => { 
    event.target.style.backgroundColor = 'blue'; 
});

  const button = document.querySelector('btn');
  button.addEventListener("click", function(event){
    event.stopPropagation()
    console.log(event)
    img.style.display = "none";
    if(button.textContent === "Sign me up!"){
      button.textContent = "NEVER!"
    } else {
      button.textContent = "Sign me up!"
    }
  });

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