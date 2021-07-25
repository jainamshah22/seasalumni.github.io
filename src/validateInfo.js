export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.contact) {
    errors.email = "Contact required";
  }

  if (!values.industry) {
    errors.industry = "Industry required";
  }

  if (!values.location) {
    errors.location = "Location required";
  }

  if (!values.gradyear) {
    errors.gradyear = "Graduation Year required";
  }

  if (!values.specialization) {
    errors.specialization = "Specialization required";
  }

  if (!values.institution) {
    errors.institution = "Institution required";
  }

  if (!values.experiences) {
    errors.experiences = "Experience required";
  }

  if (!values.link) {
    errors.link = "Linkedin Link required";
  }

  return errors;
}
