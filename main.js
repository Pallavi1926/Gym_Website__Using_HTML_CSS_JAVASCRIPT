/*---------------------Slider-------------------------*/
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const closeIcon = navLinks.querySelector("i.ri-close-line");

// Toggle the mobile menu visibility
menuBtn.addEventListener("click", () => {
  navLinks.classList.add("open");
  menuBtn.setAttribute("aria-expanded", "true"); // Accessibility
});

// Close the menu when the close icon is clicked
if (closeIcon) {
  closeIcon.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
}

/*---------------------Navigation Active Link & Smooth Scroll-------------------------*/
function handleNavigationClick(event) {
  // Prevent the default behavior of the anchor tag
  event.preventDefault();

  // Remove the 'active' class from all navigation links
  const links = document.querySelectorAll("nav ul li");
  links.forEach((link) => link.classList.remove("active"));

  // Add the 'active' class to the clicked link's parent li element
  event.target.parentNode.classList.add("active");

  // Smooth scroll to the target section
  const targetId = event.target.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }

  // Close the menu after clicking on a link (for mobile)
  navLinks.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
}

const navLinksItems = document.querySelectorAll("nav ul li a");
navLinksItems.forEach((link) => {
  link.addEventListener("click", handleNavigationClick);
});

// Existing BMI Calculator Logic
let button=document.getElementById('btn-bmi')

button.addEventListener('click',() => {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
      document.getElementById("result").innerHTML = "Please enter valid weight and height values.";
      return;
    }
  
    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';
  
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
  
    document.getElementById("result-bmi").innerHTML = `Your BMI is ${bmi} (${category})`;
  });

// Add Protein Intake Calculator Logic
function calculateProtein() {
  const weight = document.getElementById('weight').value;
  const activity = document.getElementById('activity').value;

  if (weight === '0' || activity === '0') {
      alert("Please enter all fields");
      return;
  }

  // Protein intake formula (grams per kg of body weight)
  const proteinIntake = (weight * activity).toFixed(2);

  document.getElementById("result-protien").textContent = `Your daily protein intake should be: ${proteinIntake} grams.`;
}







  // Calorie count Calculator
document.getElementById('calorieForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get user input values
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const height = document.getElementById('height').value;
  const weight = Number(document.getElementById('weight').value);
  const activityLevel = parseFloat(document.getElementById('activity').value);
  const goal = document.getElementById('goal').value;

  // Calculate BMR (Basal Metabolic Rate) using Mifflin-St Jeor Equation
  let bmr;
  if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Calculate daily caloric needs based on activity level
  let dailyCalories = bmr * activityLevel;

  // Adjust for fitness goal
  if (goal === 'lose') {
      dailyCalories -= 500; // For weight loss, reduce 500 calories per day
  } else if (goal === 'gain') {
      dailyCalories += 500; // For weight gain, increase 500 calories per day
  }

  // Display the result
  document.getElementById('caloriesResult').textContent = `Calories: ${dailyCalories.toFixed(0)} kcal/day`;

  // Show the results section
  document.querySelector('.results').style.display = 'block';
});






// Send email logic
function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "pallavi867709@gmail.com",
    Password: "Pallavi@2005??",
    To: "pallavi867709@gmail.com",
    From: document.getElementById("email").value,
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
