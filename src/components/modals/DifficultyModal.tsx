import { DifficultyModalProps } from "../../services/types";

const DifficultyModal = ({ visible, onSelect, onClose }: DifficultyModalProps) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-black w-full max-w-md p-6">
        <h2 className="text-white text-4xl text-center mb-6">Select Difficulty</h2>

        {[1, 2, 3, 4, 5].map(level => (
          <button
            key={level}
            onClick={() => onSelect(level)}
            className="w-full py-3 my-2 bg-blue-600 text-white text-3xl hover:bg-blue-700 transition"
          >
            Level {level}
          </button>
        ))}

        <button
          onClick={onClose}
          className="w-full mt-4 py-3 bg-red-600 text-white text-3xl hover:bg-red-700 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DifficultyModal;
