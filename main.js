// Existing Menu Button and ScrollReveal Logic
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
    menuBtnIcon.setAttribute('class', 'ri-menu-line');
});

const scrollRevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {...scrollRevealOption});
ScrollReveal().reveal(".header__content h2", {...scrollRevealOption, delay: 500});
ScrollReveal().reveal(".header__content p", {...scrollRevealOption, delay: 1000});
ScrollReveal().reveal(".header__content .header__btn", {...scrollRevealOption, delay: 1500});
ScrollReveal().reveal(".about__card", {duration: 1000, interval: 500});
ScrollReveal().reveal(".trainer__card", {...scrollRevealOption, interval: 500});
ScrollReveal().reveal(".blog__card", {...scrollRevealOption, interval: 500});

const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
});

// Existing BMI Calculator Logic
function bmiRun() {
    const heightInput = document.getElementById("height").value;
    const weightInput = document.getElementById("weight").value;
    const heightUnit = document.getElementById("height_unit").value;
    const weightUnit = document.getElementById("weight_unit").value;
    const result = document.getElementById("output");
    let heightStatus = false, weightStatus = false;
  
    // Convert height to meters
    let heightInMeters;
    switch (heightUnit) {
      case "cm":
        heightInMeters = heightInput / 100;
        break;
      case "m":
        heightInMeters = heightInput;
        break;
      case "in":
        heightInMeters = heightInput * 0.0254;
        break;
      case "ft":
        heightInMeters = heightInput * 0.3048;
        break;
      case "mm":
        heightInMeters = heightInput / 1000;
        break;
      default:
        document.getElementById('height_error').innerHTML = 'Invalid height unit';
        return;
    }
  
    // Convert weight to kilograms
    let weightInKg;
    switch (weightUnit) {
      case "kg":
        weightInKg = weightInput;
        break;
      case "g":
        weightInKg = weightInput / 1000;
        break;
      case "mg":
        weightInKg = weightInput / 1000000;
        break;
      case "lb":
        weightInKg = weightInput * 0.453592;
        break;
      case "oz":
        weightInKg = weightInput * 0.0283495;
        break;
      case "st lb":
        weightInKg = weightInput * 6.35029;
        break;
      case "ton":
        weightInKg = weightInput * 1000;
        break;
      default:
        document.getElementById('weight_error').innerHTML = 'Invalid weight unit';
        return;
    }
  
    // Validate height and weight inputs
    if (heightInMeters === '' || isNaN(heightInMeters) || heightInMeters <= 0) {
      document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    } else {
      document.getElementById('height_error').innerHTML = '';
      heightStatus = true;
    }
  
    if (weightInKg === '' || isNaN(weightInKg) || weightInKg <= 0) {
      document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    } else {
      document.getElementById('weight_error').innerHTML = '';
      weightStatus = true;
    }
  
    // Calculate BMI
    if (heightStatus && weightStatus) {
      const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
  
      if (bmi < 18.6) {
        console.log('Underweight: ' + bmi);
        result.innerHTML = 'Underweight: ' + bmi;
      } else if (bmi > 24.9) {
        console.log('Overweight: ' + bmi);
        result.innerHTML = 'Overweight: ' + bmi;
      } else {
        console.log('normal: ' + bmi);
        result.innerHTML = 'Normal: ' + bmi;
      }
    } else {
      alert('The form has errors');
      result.innerHTML = '';
    }
  }
// Add Protein Intake Calculator Logic
document.getElementById("protein-btn").addEventListener("click", function() {
    let weight = parseFloat(document.getElementById("protein-weight").value);
    let goal = document.getElementById("protein-goal").value;
    let proteinIntake;

    // Protein intake values based on goals (in grams per kg)
    if (goal === "maintenance") {
        proteinIntake = weight * 1.2;
    } else if (goal === "muscle-gain") {
        proteinIntake = weight * 1.6;
    } else if (goal === "fat-loss") {
        proteinIntake = weight * 2.0;
    }

    document.getElementById("protein-output").innerHTML = 
      `You need approximately ${proteinIntake.toFixed(2)} grams of protein per day.`;
});

// Add Macronutrient Calculator Logic
document.getElementById("macro-btn").addEventListener("click", function() {
    let weight = parseFloat(document.getElementById("macro-weight").value);
    let goal = document.getElementById("macro-goal").value;
    let calories = parseFloat(document.getElementById("macro-calories").value);

    let proteinRatio, carbRatio, fatRatio;

    // Macro ratios based on fitness goals
    if (goal === "maintenance") {
        proteinRatio = 0.3;
        carbRatio = 0.4;
        fatRatio = 0.3;
    } else if (goal === "bulking") {
        proteinRatio = 0.25;
        carbRatio = 0.5;
        fatRatio = 0.25;
    } else if (goal === "cutting") {
        proteinRatio = 0.35;
        carbRatio = 0.3;
        fatRatio = 0.35;
    }

    // Calculate macros in grams
    let proteinGrams = (calories * proteinRatio) / 4;
    let carbGrams = (calories * carbRatio) / 4;
    let fatGrams = (calories * fatRatio) / 9;

    document.getElementById("macro-output").innerHTML = 
      `Your daily macronutrient breakdown: 
      Protein: ${proteinGrams.toFixed(2)}g, 
      Carbs: ${carbGrams.toFixed(2)}g, 
      Fats: ${fatGrams.toFixed(2)}g.`;
});

// Send email logic
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "pallavi867709@gmail.com",
        Password: "Pallavi@2005??",
        To: 'pallavi867709@gmail.com',
        From: document.getElementById("email").value,
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
      message => alert(message)
    );
}
