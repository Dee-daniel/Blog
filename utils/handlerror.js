const handleErrors = (err) => {
    let errors = { email: "", password: "", name: "" };
    if (err.code === 11000) {
      errors.email = "Email is already in use";
      return errors;
    }
    if (err.message === "incorrect Email"){
        errors.email ="this email has not been registered"
        return errors;
    }
    if (err.message === "incorrect password") {
        errors.email ="this email has not been registered"
        errors.password ="this email or password is not correct"
        return errors;
    }
    if (err.message.includes("User validation failed")) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
    return errors;
  };

  module.exports = handleErrors;