import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>
          Register with us today! Let's create a beautiful community together !
        </h1>
        <div className="form-inputs">
          <label className="form-label">Name</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your name"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Contact</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your contact number"
            value={values.contact}
            onChange={handleChange}
          />
          {errors.contact && <p>{errors.contact}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Industry</label>
          <input
            className="form-input"
            type="text"
            name="industry"
            placeholder="Enter the industry(sector) in which you are working currently"
            value={values.industry}
            onChange={handleChange}
          />
          {errors.industry && <p>{errors.industry}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Location</label>
          <input
            className="form-input"
            type="text"
            name="location"
            placeholder="Enter your location"
            value={values.location}
            onChange={handleChange}
          />
          {errors.location && <p>{errors.location}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Graduation Year</label>
          <input
            className="form-input"
            type="text"
            name="gradyear"
            placeholder="Enter the graduation year"
            value={values.gradyear}
            onChange={handleChange}
          />
          {errors.gradyear && <p>{errors.gradyear}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Specialization</label>
          <input
            className="form-input"
            type="text"
            name="specialization"
            placeholder="Enter your specialization course"
            value={values.specialization}
            onChange={handleChange}
          />
          {errors.specialization && <p>{errors.specialization}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Institution</label>
          <input
            className="form-input"
            type="text"
            name="institution"
            placeholder="Enter the institution name"
            value={values.institution}
            onChange={handleChange}
          />
          {errors.institution && <p>{errors.institution}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Experience</label>
          <textarea
            className="form-input"
            type="text"
            name="experience"
            placeholder="Share your experience"
            value={values.experiences}
            onChange={handleChange}
          />
          {errors.experiences && <p>{errors.experiences}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">LinkedIn URL</label>
          <textarea
            className="form-input"
            type="text"
            name="link"
            placeholder="Enter your Linkedin Profile URL"
            value={values.link}
            onChange={handleChange}
          />
          {errors.link && <p>{errors.link}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
