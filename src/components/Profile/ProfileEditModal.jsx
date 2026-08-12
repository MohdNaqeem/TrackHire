import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const ProfileEditModal = ({
  profile,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState(profile);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

      {/* Modal */}
      <div className="flex w-full max-w-xl max-h-[90vh] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-[#ECECF3] px-6 py-5">

          <div>
            <h2 className="text-2xl font-bold text-[#211A52]">
              Edit Profile
            </h2>

            <p className="mt-1 text-sm text-[#8A86A3]">
              Update your profile information.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-[#8A86A3] transition hover:bg-[#F5F6FA] hover:text-[#211A52]"
          >
            <RiCloseLine size={22} />
          </button>

        </div>

        {/* Scrollable Form Area */}
        <form
          onSubmit={handleSubmit}
          className="flex min-h-0 flex-1 flex-col"
        >

          {/* Form Fields */}
          <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">

            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#211A52]">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#DCDCE7] px-4 py-3 text-sm text-[#211A52] outline-none transition focus:border-[#3CBFA4] focus:ring-2 focus:ring-[#3CBFA4]/10"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#211A52]">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#DCDCE7] px-4 py-3 text-sm text-[#211A52] outline-none transition focus:border-[#3CBFA4] focus:ring-2 focus:ring-[#3CBFA4]/10"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#211A52]">
                Phone
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#DCDCE7] px-4 py-3 text-sm text-[#211A52] outline-none transition focus:border-[#3CBFA4] focus:ring-2 focus:ring-[#3CBFA4]/10"
              />
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#211A52]">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#DCDCE7] px-4 py-3 text-sm text-[#211A52] outline-none transition focus:border-[#3CBFA4] focus:ring-2 focus:ring-[#3CBFA4]/10"
              />
            </div>

            {/* Current Role */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#211A52]">
                Current Role
              </label>

              <input
                type="text"
                name="currentRole"
                value={formData.currentRole}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#DCDCE7] px-4 py-3 text-sm text-[#211A52] outline-none transition focus:border-[#3CBFA4] focus:ring-2 focus:ring-[#3CBFA4]/10"
              />
            </div>

            {/* Preferred Role */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#211A52]">
                Preferred Role
              </label>

              <input
                type="text"
                name="preferredRole"
                value={formData.preferredRole}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#DCDCE7] px-4 py-3 text-sm text-[#211A52] outline-none transition focus:border-[#3CBFA4] focus:ring-2 focus:ring-[#3CBFA4]/10"
              />
            </div>

          </div>

          {/* Actions */}
          <div className="flex shrink-0 justify-end gap-3 border-t border-[#ECECF3] bg-white px-6 py-4">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-[#DCDCE7] px-5 py-2.5 text-sm font-semibold text-[#5F5B80] transition hover:bg-[#F5F6FA]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-[#3CBFA4] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#32A88F]"
            >
              Save Changes
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default ProfileEditModal;