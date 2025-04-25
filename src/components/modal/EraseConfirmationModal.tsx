import Icons from "../icons/Icons";

interface ModalProps {
    isOpen: boolean;
    handleCancelErase: () => void;
    handleConfirmErase: () => void;
}

const Modal = ({ isOpen, handleCancelErase, handleConfirmErase }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 transition-all">
            <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full transform transition-all scale-100 opacity-100">
                <h2 className="text-xl font-bold mb-3 text-gray-800 flex items-center">
                    <Icons.Warning />
                    Are you sure?
                </h2>
                <p className="mb-6 text-gray-600">This action cannot be undone.</p>
                <div className="flex justify-end space-x-4">
                    <button
                        className="cursor-pointer px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={handleCancelErase}
                    >
                        Cancel
                    </button>
                    <button
                        className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all"
                        onClick={handleConfirmErase}
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
