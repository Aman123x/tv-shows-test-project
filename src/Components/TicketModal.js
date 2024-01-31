import React, { useState } from "react";

const TicketModal = ({ isOpen, onClose, movieName }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataString = JSON.stringify(formData);
    localStorage.setItem("UserDetails", formDataString);
    onClose();
    alert("Your ticket has been booked Successfully");
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Book Ticket</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label>Movie Name:</label>
          <input type="text" name="movieName" value={movieName} disabled />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TicketModal;
