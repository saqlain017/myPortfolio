let myNavList = document.getElementById('myNavList');
let openBtn = document.getElementById('openBtn');
let myNavToggle = ()=>{
    if (window.innerWidth <= 992) {
        if(myNavList.style.display === "none"){
        myNavList.style.display = "flex";
        openBtn.classList.remove('fa-bars');
        openBtn.classList.add('fa-xmark');
    } else{
        myNavList.style.display = "none";
        openBtn.classList.remove('fa-xmark');
        openBtn.classList.add('fa-bars');
    }
      } else{
        myNavList.style.display = "flex";
      }   

}

let skills = document.getElementById('skills-content');
let experience = document.getElementById('experience-content');
let education = document.getElementById('education-content');
let certification = document.getElementById('certification-content');

let contentDisplay = (e)=>{
  let target = e.getAttribute('data-target');
  targetSection = document.getElementById(target);
  targetSection.style.display = "block";
  if (targetSection.style.display === "block"){
    skills.style.display = "none";
    experience.style.display = "none";
    education.style.display = "none";
    certification.style.display = "none";
    targetSection.style.display = "block";
  }
 }
