const DeleteApplicationModal = ({
  application,
  onClose,
  onConfirm,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
        {/* Header */}
        <h2 className="text-xl font-bold text-[#211A52]">
          Delete Application
        </h2>

        {/* Message */}
        <p className="mt-3 text-sm leading-6 text-[#8A86A3]">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-[#211A52]">
            {application.company}
          </span>
          ? This action cannot be undone.
        </p>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-[#E7E7EF] px-5 py-3 text-sm font-semibold text-[#5F5B80] transition hover:bg-[#F8F9FC]"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="rounded-xl bg-[#DC2626] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#B91C1C]"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteApplicationModal;