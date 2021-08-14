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
//contact form
let contactForm = document.querySelector('#contactform');
let formName = document.querySelector('#form-name');
let formEmail = document.querySelector('#form-email');
let formMessage = document.querySelector('#form-message');
let formAlert = document.querySelector('.form-alert');

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

//Contact  Form Validation
contactForm.addEventListener('submit', sendMessage);

function sendMessage(e) {
  e.preventDefault();
  let nameValue = formName.value.trim();
  let emailValue = formEmail.value.trim();
  let messageValue = formMessage.value.trim();
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!nameValue || !emailValue || !messageValue) {
    formAlert.innerText = 'Please fill all input fields';
    formAlert.classList.add('failed');
    formName.value = formName.value.trim();
    formEmail.value = formEmail.value.trim();
    formMessage.value = formMessage.value.trim();
  }

  if (!emailValue.match(re)) {
    formAlert.innerText = 'Please enter valid email';
    formAlert.classList.add('failed');
    formName.value = formName.value.trim();
    formEmail.value = formEmail.value.trim();
    formMessage.value = formMessage.value.trim();
  }

  if (nameValue && messageValue && emailValue.match(re)) {
    formAlert.innerText = 'Thanks for reaching out I will get back to you ASAP';
    formAlert.classList.add('success');
    formName.value = '';
    formEmail.value = '';
    formMessage.value = '';
  }

  setTimeout(() => {
    location.reload();
  }, 5000);
}
