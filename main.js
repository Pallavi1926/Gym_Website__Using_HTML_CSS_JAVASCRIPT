  // Add event listener to the button with id "bmi-btn"
  document.getElementById("bmi-btn").addEventListener("click", () => {
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const result = document.getElementById("output");
    let heightStatus = false, weightStatus = false;

    // Validate height
    if (!height || isNaN(height) || height <= 0) {
      document.getElementById("height_error").innerHTML = "Please provide a valid height";
    } else {
      document.getElementById("height_error").innerHTML = "";
      heightStatus = true;
    }

    // Validate weight
    if (!weight || isNaN(weight) || weight <= 0) {
      document.getElementById("weight_error").innerHTML = "Please provide a valid weight";
    } else {
      document.getElementById("weight_error").innerHTML = "";
      weightStatus = true;
    }

    // If both inputs are valid, calculate BMI
    if (heightStatus && weightStatus) {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);

      // Display result based on BMI range
      if (bmi < 18.6) {
        result.innerHTML = `Underweight: ${bmi}`;
      } else if (bmi >= 18.6 && bmi <= 24.9) {
        result.innerHTML = `Normal: ${bmi}`;
      } else {
        result.innerHTML = `Overweight: ${bmi}`;
      }
    } else {
      result.innerHTML = ""; // Clear the output if there are errors
    }
  });


  // Protein Intake Calculator Logic
  document.getElementById("protein-btn").addEventListener("click", () => {
    const weight = parseFloat(document.getElementById("protein-weight").value);
    const goal = document.getElementById("protein-goal").value;
    const result = document.getElementById("protein-output");

    // Validate weight input
    if (!weight || weight <= 0) {
      document.getElementById("protein-weight-error").innerHTML = "Please provide a valid weight";
      result.innerHTML = "";  // Clear the result output in case of error
      return;
    } else {
      document.getElementById("protein-weight-error").innerHTML = ""; // Clear any previous error message
    }

    // Determine protein intake based on the fitness goal
    let proteinIntake;
    if (goal === "maintenance") {
      proteinIntake = weight * 1.2;
    } else if (goal === "muscle-gain") {
      proteinIntake = weight * 1.6;
    } else if (goal === "fat-loss") {
      proteinIntake = weight * 2.0;
    }

    // Output the protein intake result
    result.innerHTML = `You need approximately ${proteinIntake.toFixed(2)} grams of protein per day.`;
  });

  // Macronutrient Calculator Logic
  document.getElementById("macro-btn").addEventListener("click", () => {
    const weight = parseFloat(document.getElementById("macro-weight").value);
    const calories = parseFloat(document.getElementById("macro-calories").value);
    const goal = document.getElementById("macro-goal").value;
    const result = document.getElementById("macro-output");

    // Validate inputs
    if (!weight || weight <= 0) {
      document.getElementById("macro-weight-error").innerHTML = "Please provide a valid weight";
      result.innerHTML = "";  // Clear result if there's an error
      return;
    } else {
      document.getElementById("macro-weight-error").innerHTML = ""; // Clear previous error
    }

    if (!calories || calories <= 0) {
      document.getElementById("macro-calories-error").innerHTML = "Please provide valid calories";
      result.innerHTML = "";  // Clear result if there's an error
      return;
    } else {
      document.getElementById("macro-calories-error").innerHTML = ""; // Clear previous error
    }

    // Macronutrient ratios based on fitness goal
    let proteinRatio, carbRatio, fatRatio;

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

    // Calculate the grams of each macronutrient
    const proteinGrams = (calories * proteinRatio) / 4; // 1g protein = 4 calories
    const carbGrams = (calories * carbRatio) / 4; // 1g carbs = 4 calories
    const fatGrams = (calories * fatRatio) / 9; // 1g fat = 9 calories

    // Display the result
    result.innerHTML = `Your daily macronutrient breakdown:<br>
        Protein: ${proteinGrams.toFixed(2)}g,<br> 
        Carbs: ${carbGrams.toFixed(2)}g,<br> 
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
