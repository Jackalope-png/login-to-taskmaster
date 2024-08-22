const bigdiv = document.getElementsByTagName("div")[0];
const email = document.createElement("input");
email.className = "inputinput";
email.setAttribute("type", "text");
email.setAttribute("placeholder", "Enter Email");
bigdiv.appendChild(email);
document.body.appendChild(bigdiv);

const phonenum = document.createElement("input");
phonenum.setAttribute("type", "text");
phonenum.className = "inputinput";
phonenum.setAttribute("placeholder", "Enter phone number");
bigdiv.appendChild(phonenum);

const passw = document.createElement("input");
passw.setAttribute("type", "password");
passw.className = "inputinput";
passw.setAttribute("placeholder", "Enter Password");
bigdiv.appendChild(passw);

const togglepass = document.createElement("input");
togglepass.setAttribute("type", "checkbox");
togglepass.onclick = Toggle;
bigdiv.appendChild(togglepass);

function Toggle() {
  if (passw.type === "password") {
    passw.type = "text";
  } else {
    passw.type = "password";
  }
}

function isPasswordLong() {
  const isPasswordlongVal = passw.value;
  let truecount = 0;
  if (isPasswordlongVal.length >= 8) {
    for (let i = 0; i < isPasswordlongVal.length; i++) {
      if (isPasswordlongVal[i] >= "0" && isPasswordlongVal[i] <= "9") {
        truecount++;
      }
    }
    return truecount >= 5;
  }
  return false;
}

function isValidEmail() {
  const emailValue = email.value;
  return emailValue.includes("@");
}

function isNumValid() {
  const phonenumVal = phonenum.value;
  let numcount = 0;
  for (let i = 0; i < phonenumVal.length; i++) {
    if (phonenumVal[i] >= "0" && phonenumVal[i] <= "9") {
      numcount++;
    }
  }
  return numcount >= 9;
}

const signinButton = document.createElement("input");
signinButton.setAttribute("type", "button");
signinButton.setAttribute("value", "Sign up");
signinButton.className = "inputsignup";
bigdiv.appendChild(signinButton);

signinButton.addEventListener("click", function () {
  const isEmailValid = isValidEmail();
  const isPhoneValid = isNumValid();
  const isPasswordValid = isPasswordLong();

  if (isEmailValid && isPhoneValid && isPasswordValid) {
    localStorage.setItem("email", email.value);
    localStorage.setItem("phonenum", phonenum.value);
    localStorage.setItem("password", passw.value);
    window.location.href = "task.html";
    console.log("All inputs are valid!");
  } else {
    console.log("One or more inputs are invalid.");
  }
});