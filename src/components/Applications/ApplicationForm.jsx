import { useState } from "react";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

const ApplicationForm = () => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("Applied");
  const [appliedDate, setAppliedDate] = useState("");
  const [location, setLocation] = useState("");

  return (
    <form className="space-y-5">
      <FormInput
        label="Company Name"
        placeholder="Enter company name"
        value={company}
        onChange={(e) =>
          setCompany(e.target.value)
        }
      />

      <FormInput
        label="Position"
        placeholder="Enter job position"
        value={position}
        onChange={(e) =>
          setPosition(e.target.value)
        }
      />

      <FormSelect
        label="Status"
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
        options={[
          "Applied",
          "Interview",
          "Offer",
          "Rejected",
        ]}
      />

      <FormInput
        label="Applied Date"
        type="date"
        value={appliedDate}
        onChange={(e) =>
          setAppliedDate(e.target.value)
        }
      />

      <FormInput
        label="Location"
        placeholder="Enter location"
        value={location}
        onChange={(e) =>
          setLocation(e.target.value)
        }
      />
    </form>
  );
};

export default ApplicationForm;