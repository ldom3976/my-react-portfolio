import React, { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "Name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Email is Invalid.");
      return;
    }

    if (!Name) {
      alert("Field is Required.");
      return;
    }

    if (!message) {
      alert("Field is Required.");
      return;
    }

    if (email || Name || message) {
      setSuccessMessage("Form Submitted Successfully!");
      return;
    }

    setName("");
    setMessage("");
    setEmail("");
  };
}

export default Form;