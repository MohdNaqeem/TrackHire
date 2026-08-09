import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

const ApplicationForm = ({ formData, handleInputChange, formErrors }) => {
  return (
    <form className="space-y-5">
      <FormInput
        label="Company Name"
        name="company"
        placeholder="Enter company name"
        value={formData.company}
        onChange={handleInputChange}
        error={formErrors.company}
      />

      <FormInput
        label="Position"
        name="position"
        placeholder="Enter job position"
        value={formData.position}
        onChange={handleInputChange}
        error={formErrors.position}
      />

      <FormSelect
        label="Status"
        name="status"
        value={formData.status}
        onChange={handleInputChange}
        options={["Applied", "Interview", "Offer", "Rejected"]}
        error={formErrors.status}
      />

      <FormInput
        label="Applied Date"
        name="appliedDate"
        type="date"
        value={formData.appliedDate}
        onChange={handleInputChange}
        error={formErrors.appliedDate}
      />

      <FormInput
        label="Location"
        name="location"
        placeholder="Enter location"
        value={formData.location}
        onChange={handleInputChange}
        error={formErrors.location}
      />
    </form>
  );
};

export default ApplicationForm;
