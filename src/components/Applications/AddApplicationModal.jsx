import { RiCloseLine } from "react-icons/ri";
import ModalOverlay from "./ModalOverlay";
import ApplicationForm from "./ApplicationForm";

const AddApplicationModal = ({
  onClose,
  formData,
  handleInputChange,
  handleSubmit,
  editingApplication,
  formErrors,
}) => {
  return (
    <ModalOverlay>
      <div
        className="
          w-[calc(100vw-1.5rem)]
          max-w-2xl
          max-h-[90vh]
          overflow-y-auto
          rounded-3xl
          bg-white
          shadow-2xl
        "
      >
        {/* Header */}
        <div
          className="
            flex
            items-start
            justify-between
            gap-4
            border-b
            border-[#ECECF3]
            px-4
            py-5
            sm:px-8
            sm:py-7
          "
        >
          <div className="min-w-0">
            <h2 className="text-lg font-bold text-[#211A52] sm:text-xl">
              {editingApplication
                ? "Edit Application"
                : "Add New Application"}
            </h2>

            <p className="mt-1 text-sm text-[#8A86A3]">
              Fill in the details below to track a new job application.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-xl p-2 transition hover:bg-[#F5F6FA]"
          >
            <RiCloseLine size={24} className="text-[#5F5B80]" />
          </button>
        </div>

        {/* Body */}
        <div className="px-4 py-5 sm:px-8 sm:py-7">
          <ApplicationForm
            formData={formData}
            handleInputChange={handleInputChange}
            formErrors={formErrors}
          />
        </div>

        {/* Footer */}
        <div
          className="
            flex
            flex-col-reverse
            gap-3
            border-t
            border-[#ECECF3]
            px-4
            py-5
            sm:flex-row
            sm:justify-end
            sm:gap-4
            sm:px-8
            sm:py-7
          "
        >
          <button
            type="button"
            onClick={onClose}
            className="
              w-full
              rounded-xl
              border
              border-[#E7E7EF]
              px-6
              py-3
              font-medium
              text-[#5F5B80]
              transition
              hover:bg-[#F5F6FA]
              sm:w-auto
            "
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className="
              w-full
              rounded-xl
              bg-[#3CBFA4]
              px-6
              py-3
              font-medium
              text-white
              transition
              hover:bg-[#31AE94]
              sm:w-auto
            "
          >
            {editingApplication
              ? "Update Application"
              : "Add Application"}
          </button>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default AddApplicationModal;