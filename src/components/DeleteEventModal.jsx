const DeleteModal = ({ isOpen, onClose, onDelete }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full">
                <h2 className="text-xl font-semibold text-gray-800">Confirm Deletion</h2>
                <p className="text-gray-600 mt-2">Are you sure you want to delete this event? This action cannot be undone.</p>

                <div className="flex justify-end mt-4 space-x-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onDelete}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;
