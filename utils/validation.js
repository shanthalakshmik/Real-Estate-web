export const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };
  
  // Check if a password is strong enough
  export const validatePassword = (password) => {
    const minLength = 6;
    return password.length >= minLength;
  };
  
  // Validate form fields (email and password)
  export const validateForm = (email, password) => {
    const errors = {};
  
    if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }
  
    if (!validatePassword(password)) {
      errors.password = 'Password must be at least 6 characters long';
    }
  
    return errors;
  };
  