const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data) {
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.name = validText(data.name) ? data.name : "";
  
  if (!Validator.isEmail(data.email)) {
    return { message: "Email is invalid", isValid: false };
  }

  if (Validator.isEmpty(data.email)) {
    return { message: "Email field is required", isValid: false };
  }

  if (Validator.isEmpty(data.password)) {
    return { message: "Password field is required", isValid: false };
  }

  if (Validator.isEmpty(data.name)) {
    return { message: "Name field is required", isValid: false };
  }

  // Check db for uniqueness on name / email?

  return {
    message: "",
    isValid: true
  };
};