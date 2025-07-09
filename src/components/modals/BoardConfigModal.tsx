import { useState } from 'react';
import { BoardConfigModalProps } from '../../services/types';

const BoardConfigModal = ({
  visible,
  currentBoards,
  currentSize,
  onConfirm,
  onCancel
}: BoardConfigModalProps) => {
  const [selectedBoards, setSelectedBoards] = useState<any>(currentBoards);
  const [selectedSize, setSelectedSize] = useState<any>(currentSize);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-black p-6 w-[90%] max-w-xl text-center space-y-6">
        <h2 className="text-red-600 text-[35px] ">Number of Boards</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {[1, 2, 3, 4, 5].map(num => (
            <button
              key={num}
              onClick={() => setSelectedBoards(num)}
              className={`min-w-[60px] px-4 py-2 text-white text-xl ${
                selectedBoards === num ? 'bg-red-600' : 'bg-blue-600'
              }`}
            >
              {num}
            </button>
          ))}
        </div>

        <h2 className="text-red-600 text-[35px]">Board Size</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {[2, 3, 4, 5].map(size => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`min-w-[60px] px-4 py-2 text-white text-xl ${
                selectedSize === size ? 'bg-red-600' : 'bg-blue-600'
              }`}
            >
              {size}x{size}
            </button>
          ))}
        </div>

        <div className="flex gap-4 pt-2">
          <button
            onClick={onCancel}
            className="flex-1 py-3 bg-blue-600 text-white text-xl hover:bg-blue-700"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(selectedBoards, selectedSize)}
            className="flex-1 py-3 bg-blue-600 text-white text-xl hover:bg-blue-700"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardConfigModal;

