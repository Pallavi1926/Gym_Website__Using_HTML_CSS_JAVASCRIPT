const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const bmiBtn = document.getElementById("btn");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");


    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");

});

navLinks.addEventListener('click', (e) => {
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute('class', 'ri-menu-line')

})

const scrollRevealOption = {
    distance : '50px',
    origin: 'bottom',
    duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
})
ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 500,
})
ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1000,
})
ScrollReveal().reveal(".header__content .header__btn", {
    ...scrollRevealOption,
    delay: 1500,
})
ScrollReveal().reveal(".about__card", {
    duration:1000,
    interval: 500,
})
ScrollReveal().reveal(".trainer__card", {
    ...scrollRevealOption,
    interval: 500,
})
ScrollReveal().reveal(".blog__card", {
    ...scrollRevealOption,
    interval: 500,
})
const swiper = new Swiper(".swiper", {
    loop: true,
  
    pagination: {
      el: ".swiper-pagination",
    },
  });

  bmiBtn.addEventListener("click", () => {
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const result = document.getElementById("output");
    let height_status=false, weight_status=false;

    if(height === '' || isNaN(height) || height<=0){
    document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';    
        height_status=true;
    }
    
    if(weight === '' || isNaN(weight) || weight<=0){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
        }else{
            document.getElementById('weight_error').innerHTML = '';    
            weight_status=true;
        }

    if(height_status && weight_status){
    const bmi = (weight/((height*height)/10000)).toFixed(2);

    if(bmi < 18.6){
    result.innerHTML = 'Under weight : '+bmi;
    }
    else if(bmi > 24.9){
    result.innerHTML = 'Over weight : '+bmi;
    }
    else{
    result.innerHTML = 'Normal : '+bmi;
    }
    }else{
    alert('The form has errors');
    result.innerHTML = '';
    }

  })

  function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "pallavi867709@gmail.com",
        Password : "Pallavi@2005??",
        To : 'pallavi867709@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
  }
