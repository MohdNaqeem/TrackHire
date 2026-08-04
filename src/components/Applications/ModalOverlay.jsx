const ModalOverlay = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 px-6 py-10 backdrop-blur-sm">
      {children}
    </div>
  );
};

export default ModalOverlay;