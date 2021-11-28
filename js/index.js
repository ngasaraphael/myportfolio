// Toggle menu icon
let toggle = document.querySelector('.menu');
let navigation = document.querySelector('.navigation ul');
let introAnimation = document.querySelector('.intro-animation');
let allBtn = document.querySelector('.all-btn');
let designBtn = document.querySelector('.design-btn');
let fullStackBtn = document.querySelector('.full-stack-btn');
let designProjects = document.querySelectorAll('.design-project');
let fullstackProjects = document.querySelectorAll('.fullstack-project');
let allProjects = document.querySelectorAll('.all-projects');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
});

//Job Category sorting
//Design Jobs
if (designBtn) {
  designBtn.addEventListener('click', () => {
    fullstackProjects.forEach((fullstackProject) => {
      fullstackProject.style.display = 'none';
      designProjects.forEach((designProject) => {
        designProject.style.display = 'block';
      });
    });
  });
}

//Full stack jobs
if (fullStackBtn) {
  fullStackBtn.addEventListener('click', () => {
    designProjects.forEach((designProject) => {
      designProject.style.display = 'none';

      fullstackProjects.forEach((fullstackProject) => {
        fullstackProject.style.display = 'block';
      });
    });
  });
}

//All jobs
if (allBtn) {
  allBtn.addEventListener('click', () => {
    allProjects.forEach((allProject) => {
      allProject.style.display = 'block';
    });
  });
}

// copyeright date
document
  .getElementById('copyright')
  .appendChild(document.createTextNode(new Date().getFullYear()));

// MODAL
// Get the modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');
var btn2 = document.getElementById('myBtn2');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];
var span2 = document.getElementsByClassName('close2')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

btn2.onclick = function () {
  modal2.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};
span2.onclick = function () {
  modal2.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
