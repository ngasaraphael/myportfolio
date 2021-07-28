// Toggle menu icon

const toggle = document.querySelector('.menu');
const navigation = document.querySelector('.navigation ul');
const introAnimation = document.querySelector('.intro-animation');
const allBtn = document.querySelector('.all-btn');
const designBtn = document.querySelector('.design-btn');
const fullStackBtn = document.querySelector('.full-stack-btn');
const designProjects = document.querySelectorAll('.design-project');
const fullstackProjects = document.querySelectorAll('.fullstack-project');
const allProjects = document.querySelectorAll('.all-projects');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
});

//Intro Animation
// setTimeout(() => {
//   introAnimation.style.display = 'none';
// }, 3000);

//Job Category sorting
//Design Jobs
designBtn.addEventListener('click', () => {
  fullstackProjects.forEach((fullstackProject) => {
    fullstackProject.style.display = 'none';
    designProjects.forEach((designProject) => {
      designProject.style.display = 'block';
    });
  });
});

//Full stack jobs
fullStackBtn.addEventListener('click', () => {
  designProjects.forEach((designProject) => {
    designProject.style.display = 'none';

    fullstackProjects.forEach((fullstackProject) => {
      fullstackProject.style.display = 'block';
    });
  });
});

//All jobs
allBtn.addEventListener('click', () => {
  allProjects.forEach((allProject) => {
    allProject.style.display = 'block';
  });
});

// copyeright date
document
  .getElementById('copyright')
  .appendChild(document.createTextNode(new Date().getFullYear()));
