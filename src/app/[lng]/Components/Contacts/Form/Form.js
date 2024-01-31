// "use client";
// import React, { useState, useEffect } from "react";
// import "./form.scss";

// const Form = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [popUp, setPopUp] = useState(false);
//   const [formErrors, setFormErrors] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });
//   const [submitAttempted, setSubmitAttempted] = useState(false);

//   useEffect(() => {
//     let timer;

//     if (popUp) {
//       timer = setTimeout(() => {
//         setPopUp(false);
//       }, 5000);
//     }

//     return () => clearTimeout(timer);
//   }, [popUp]);

//   const validateName = (value) => {
//     const regex = /^[a-zA-Zа-яА-Я\s]+$/;
//     if (value.length < 3) {
//       return "Name must be at least 3 characters.";
//     }
//     if (!regex.test(value)) {
//       return "Name can only contain letters and spaces.";
//     }
//     return "";
//   };

//   const validatePhone = (value) => {
//     const regex = /^[0-9\s()+-]+$/;
//     if (!value) {
//       return "Phone number is required.";
//     }
//     if (!regex.test(value)) {
//       return "Phone number can only contain numbers and special characters.";
//     }
//     return "";
//   };

//   const validateEmail = (value) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!value) {
//       return "Email is required.";
//     }
//     if (!regex.test(value)) {
//       return "Please enter a valid email address.";
//     }
//     return "";
//   };

//   const validateMessage = (value) => {
//     if (value.length < 3) {
//       return "Message must be at least 3 characters.";
//     }
//     return "";
//   };

//   const validateForm = () => {
//     const nameError = validateName(name);
//     const phoneError = validatePhone(phone);
//     const emailError = validateEmail(email);
//     const messageError = validateMessage(message);

//     setFormErrors({
//       name: nameError,
//       phone: phoneError,
//       email: emailError,
//       message: messageError,
//     });

//     return !(nameError || phoneError || emailError || messageError);
//   };

//   const handleSubmit = async (e) => {
//     const endpoint = "https://test/test";
//     // const endpoint = "https://formspree.io/f/myyrkybe";  SET IT !!!!!!!!!!!!!!!!!!!!!!!!!!
//     e.preventDefault();
//     setSubmitAttempted(true);

//     if (validateForm()) {
//       // Proceed with form submission
//       console.log("Form submitted successfully!");
//       setSubmitAttempted(false);
//       setPopUp(true);

//       const response = await fetch(endpoint, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, phone, email, message }),
//       });
//     } else {
//       console.error("Form has validation errors.");
//     }
//   };

//   return (
//     <>
//       {popUp ? (
//         <div className="pop-up">
//           <p className="pop-up_text">
//             Thank you ! <br /> We will contact you shortly
//           </p>
//         </div>
//       ) : (
//         <form className="form" onSubmit={handleSubmit}>
//           <label>
//             Full Name:
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             {(submitAttempted || name) && (
//               <span className="error">{formErrors.name}</span>
//             )}
//           </label>

//           <label>
//             Phone Number:
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             {(submitAttempted || phone) && (
//               <span className="error">{formErrors.phone}</span>
//             )}
//           </label>

//           <label>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {(submitAttempted || email) && (
//               <span className="error">{formErrors.email}</span>
//             )}
//           </label>

//           <label>
//             Message:
//             <textarea
//               maxlength="400"
//               className="text-aria"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//             {(submitAttempted || message) && (
//               <span className="error">{formErrors.message}</span>
//             )}
//           </label>

//           <div className="submit__inner">
//             <button type="submit" className="submit">
//               Send Message
//             </button>
//             {submitAttempted && !name && !phone && !email && !message && (
//               <span className="error">Fill in all fields correctly.</span>
//             )}
//           </div>
//         </form>
//       )}
//     </>
//   );
// };

// export default Form;
"use client";
import React, { useState, useEffect } from "react";
import "./form.scss";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitAttempted, setSubmitAttempted] = useState(false);

  useEffect(() => {
    let timer;

    if (popUp) {
      timer = setTimeout(() => {
        setPopUp(false);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [popUp]);

  const validateName = (value) => {
    // const regex = /^[a-zA-Zа-яА-Я\s]+$/;
    const regex = /^[a-zA-Zа-яА-Я\s]+$/;
    if (value.length < 3) {
      return "Name must be at least 3 characters.";
    }
    if (!regex.test(value)) {
      return "Name can only contain letters and spaces.";
    }
    return "";
  };

  const validatePhone = (value) => {
    const regex = /^[0-9\s()+-]+$/;
    if (!value) {
      return "Phone number is required.";
    }
    if (!regex.test(value)) {
      return "Phone number can only contain numbers and special characters.";
    }
    return "";
  };

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      return "Email is required.";
    }
    if (!regex.test(value)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const validateMessage = (value) => {
    if (value.length < 3) {
      return "Message must be at least 3 characters.";
    }
    return "";
  };

  const validateForm = () => {
    const nameError = validateName(name);
    const phoneError = validatePhone(phone);
    const emailError = validateEmail(email);
    const messageError = validateMessage(message);

    setFormErrors({
      name: nameError,
      phone: phoneError,
      email: emailError,
      message: messageError,
    });

    return !(nameError || phoneError || emailError || messageError);
  };

  useEffect(() => {
    const validateAndSetError = (validator, value, key) => {
      const error = validator(value);
      setFormErrors((prevErrors) => ({ ...prevErrors, [key]: error }));
    };

    validateAndSetError(validateName, name, "name");
    validateAndSetError(validatePhone, phone, "phone");
    validateAndSetError(validateEmail, email, "email");
    validateAndSetError(validateMessage, message, "message");
  }, [name, phone, email, message]);

  const handleSubmit = async (e) => {
    const endpoint = "https://formspree.io/f/myyrkybe";
    e.preventDefault();
    setSubmitAttempted(true);

    if (validateForm()) {
      // Proceed with form submission
      console.log("Form submitted successfully!");
      setSubmitAttempted(false);
      setPopUp(true);

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email, message }),
      });
    } else {
      console.error("Form has validation errors.");
    }
  };

  return (
    <>
      {popUp ? (
        <div className="pop-up">
          <p className="pop-up_text">
            Thank you ! <br /> We will contact you shortly
          </p>
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {(submitAttempted || name) && (
              <span className="error">{formErrors.name}</span>
            )}
          </label>

          <label>
            Phone Number:
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {(submitAttempted || phone) && (
              <span className="error">{formErrors.phone}</span>
            )}
          </label>

          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {(submitAttempted || email) && (
              <span className="error">{formErrors.email}</span>
            )}
          </label>

          <label>
            Message:
            <textarea
              maxLength="400"
              className="text-aria"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {(submitAttempted || message) && (
              <span className="error">{formErrors.message}</span>
            )}
          </label>

          <div className="submit__inner">
            <button type="submit" className="submit">
              Send Message
            </button>
            {submitAttempted && !name && !phone && !email && !message && (
              <span className="error">Fill in all fields correctly.</span>
            )}
          </div>
        </form>
      )}
    </>
  );
};

export default Form;
