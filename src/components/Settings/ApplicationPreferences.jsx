import { useState } from "react";
import { applicationPreferences } from "../../data/settingsData";

const ApplicationPreferences = () => {
  const [preferences, setPreferences] = useState(
    applicationPreferences,
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPreferences((previousPreferences) => ({
      ...previousPreferences,
      [name]: value,
    }));
  };

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {/* Job Type */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#211A52]">
          Default Job Type
        </label>

        <select
          name="jobType"
          value={preferences.jobType}
          onChange={handleChange}
          className="w-full rounded-xl border border-[#DCDCE7] bg-white px-4 py-3 text-sm text-[#211A52] outline-none transition focus:border-[#3CBFA4] focus:ring-2 focus:ring-[#3CBFA4]/10"
        >
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      {/* Work Mode */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#211A52]">
          Preferred Work Mode
        </label>

        <select
          name="workMode"
          value={preferences.workMode}
          onChange={handleChange}
          className="w-full rounded-xl border border-[#DCDCE7] bg-white px-4 py-3 text-sm text-[#211A52] outline-none transition focus:border-[#3CBFA4] focus:ring-2 focus:ring-[#3CBFA4]/10"
        >
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="On-site">On-site</option>
        </select>
      </div>
    </div>
  );
};

export default ApplicationPreferences;