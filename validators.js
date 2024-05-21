const validateRegistration = (req, res, next) => {
    const { firstName, lastName, password, email, phoneNumber } = req.body;
  
    // Validate First Name and Last Name
    const nameRegex = /^[A-Z][a-z]*$/;
    if (!nameRegex.test(firstName)) {
      return next({ status: 400, message: 'First name must start with a capital letter.' });
    }
    if (!nameRegex.test(lastName)) {
      return next({ status: 400, message: 'Last name must start with a capital letter.' });
    }
  
    // Validate Password
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return next({
        status: 400,
        message: 'Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.',
      });
    }
  
    // Validate Email
    if (!email.includes('@')) {
      return next({ status: 400, message: 'Email must contain the "@" symbol.' });
    }
  
    // Validate Phone Number
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return next({ status: 400, message: 'Phone number must be at least 10 digits long.' });
    }
  
    next();
  };
  
  module.exports = validateRegistration;
  