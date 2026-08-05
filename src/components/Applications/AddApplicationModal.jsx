import { RiCloseLine } from "react-icons/ri";
import ModalOverlay from "./ModalOverlay";
import ApplicationForm from "./ApplicationForm";

const AddApplicationModal = ({
  onClose,
  formData,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <ModalOverlay>
      <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#ECECF3] px-8 py-7">
          <div>
            <h2 className="text-2xl font-bold text-[#211A52]">
              Add New Application
            </h2>

            <p className="mt-1 text-sm text-[#8A86A3]">
              Fill in the details below to track a new job application.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-[#F5F6FA]"
          >
            <RiCloseLine size={24} className="text-[#5F5B80]" />
          </button>
        </div>

        {/* Body */}
        {/* Body */}
        <div className="px-8 py-7">
          <ApplicationForm
            formData={formData}
            handleInputChange={handleInputChange}
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 border-t border-[#ECECF3] px-8 py-7">
          <button
            onClick={onClose}
            className="rounded-xl border border-[#E7E7EF] px-6 py-3 font-medium text-[#5F5B80] transition hover:bg-[#F5F6FA]"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-xl bg-[#3CBFA4] px-6 py-3 font-medium text-white transition hover:bg-[#31AE94]"
          >
            Add Application
          </button>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default AddApplicationModal;
