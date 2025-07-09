import type { CellProps } from '../services/types';

const Cell: React.FC<CellProps> = ({ boardIndex, cellIndex, value, onPress, disabled }) => {
  return (
    <button
      onClick={() => onPress(boardIndex, cellIndex)}
      disabled={disabled || !!value}
      className={`
        relative border border-gray-300 flex items-center justify-center
        ${disabled ? 'bg-gray-800' : 'bg-black hover:bg-gray-900'}
        aspect-square
      `}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-red-600 text-5xl"
          style={{
            lineHeight: 1,
            filter: 'drop-shadow(0 0 2px rgba(255,0,0,0.5))'
          }}
        >
          {value}
        </span>
      </div>
    </button>
  );
};

export default Cell;