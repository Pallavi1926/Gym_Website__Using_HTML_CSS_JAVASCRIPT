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
bmiBtn.addEventListener("click", () => {
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById("output");
  let heightStatus = false,
    weightStatus = false;

  if (height === "" || isNaN(height) || height <= 0) {
    document.getElementById("height_error").innerHTML =
      "Please provide a valid height";
  } else {
    document.getElementById("height_error").innerHTML = "";
    heightStatus = true;
  }

  if (weight === "" || isNaN(weight) || weight <= 0) {
    document.getElementById("weight_error").innerHTML =
      "Please provide a valid weight";
  } else {
    document.getElementById("weight_error").innerHTML = "";
    weightStatus = true;
  }

  if (heightStatus && weightStatus) {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = "Underweight: " + bmi;
    } else if (bmi > 24.9) {
      result.innerHTML = "Overweight: " + bmi;
    } else {
      result.innerHTML = "Normal: " + bmi;
    }
  } else {
    alert("The form has errors");
    result.innerHTML = "";
  }
});

// Add Protein Intake Calculator Logic
document.getElementById("protein-btn").addEventListener("click", function () {
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

  document.getElementById(
    "protein-output"
  ).innerHTML = `You need approximately ${proteinIntake.toFixed(
    2
  )} grams of protein per day.`;
});

// Add Macronutrient Calculator Logic
document.getElementById("macro-btn").addEventListener("click", function () {
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

  document.getElementById(
    "macro-output"
  ).innerHTML = `Your daily macronutrient breakdown: 
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
    To: "pallavi867709@gmail.com",
    From: document.getElementById("email").value,
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
