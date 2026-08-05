import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

const ApplicationForm = ({ formData, handleInputChange }) => {
  return (
    <form className="space-y-5">
      <FormInput
        label="Company Name"
        name="company"
        placeholder="Enter company name"
        value={formData.company}
        onChange={handleInputChange}
      />

      <FormInput
        label="Position"
        name="position"
        placeholder="Enter job position"
        value={formData.position}
        onChange={handleInputChange}
      />

      <FormSelect
        label="Status"
        name="status"
        value={formData.status}
        onChange={handleInputChange}
        options={["Applied", "Interview", "Offer", "Rejected"]}
      />

      <FormInput
        label="Applied Date"
        name="appliedDate"
        type="date"
        value={formData.appliedDate}
        onChange={handleInputChange}
      />

      <FormInput
        label="Location"
        name="location"
        placeholder="Enter location"
        value={formData.location}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default ApplicationForm;
