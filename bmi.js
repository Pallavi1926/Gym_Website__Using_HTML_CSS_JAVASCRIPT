function calculateBMI() {
  const gender = document.getElementById('gender').value;
  const ageGroup = document.getElementById('age').value;
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);

  if (!gender || !ageGroup || !height || !weight) {
      alert('Please fill in all fields.');
      return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const resultElement = document.getElementById('result');

  let category = '';

  if (ageGroup === 'child') {
      if (bmi < 14) {
          category = 'Underweight';
      } else if (bmi < 18) {
          category = 'Normal weight';
      } else if (bmi < 22) {
          category = 'Overweight';
      } else {
          category = 'Obesity';
      }
  } else if (ageGroup === 'teen') {
      if (bmi < 16) {
          category = 'Underweight';
      } else if (bmi < 23) {
          category = 'Normal weight';
      } else if (bmi < 27) {
          category = 'Overweight';
      } else {
          category = 'Obesity';
      }
  } else if (ageGroup === 'adult') {
      if (gender === 'male') {
          if (bmi < 20.7) {
              category = 'Underweight';
          } else if (bmi < 26.4) {
              category = 'Normal weight';
          } else if (bmi < 27.8) {
              category = 'Slightly overweight';
          } else if (bmi < 31.1) {
              category = 'Overweight';
          } else {
              category = 'Obesity';
          }
      } else if (gender === 'female') {
          if (bmi < 19.1) {
              category = 'Underweight';
          } else if (bmi < 25.8) {
              category = 'Normal weight';
          } else if (bmi < 27.3) {
              category = 'Slightly overweight';
          } else if (bmi < 32.3) {
              category = 'Overweight';
          } else {
              category = 'Obesity';
          }
      }
  } else if (ageGroup === 'senior') {
      if (gender === 'male') {
          if (bmi < 22) {
              category = 'Underweight';
          } else if (bmi < 27) {
              category = 'Normal weight';
          } else if (bmi < 30) {
              category = 'Overweight';
          } else {
              category = 'Obesity';
          }
      } else if (gender === 'female') {
          if (bmi < 21) {
              category = 'Underweight';
          } else if (bmi < 27) {
              category = 'Normal weight';
          } else if (bmi < 32) {
              category = 'Overweight';
          } else {
              category = 'Obesity';
          }
      }
  }

  resultElement.innerHTML = `Your BMI is ${bmi.toFixed(1)} (${category})`;
}

function Refresh() {
  document.getElementById('gender').value = "";
  document.getElementById('age').value = "";
  document.getElementById('height').value = "";
  document.getElementById('weight').value = "";
  document.getElementById('result').innerHTML = "";
}

