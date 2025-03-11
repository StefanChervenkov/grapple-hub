// Desc: ApplyModal component to confirm application to an event

const ApplyModal = ({ isOpen, onClose, onApply }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-black">Confirm Application</h2>
        <p className="mb-4 text-black">Would you like to join this event?</p>
        <div className="mt-4 flex space-x-3">
          <button
            onClick={onApply}
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition"
          >
            Apply
          </button>
          <button
            onClick={onClose}
            className="bg-gray-600 hover:bg-gray-500 text-white font-medium px-4 py-2 rounded-lg transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;