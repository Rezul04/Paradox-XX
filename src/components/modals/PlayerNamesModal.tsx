import { useState, useEffect } from 'react';
import { PlayerNamesModalProps } from '../../services/types';


const PlayerNamesModal = ({ visible, onSubmit, initialNames }: PlayerNamesModalProps) => {
  const [player1, setPlayer1] = useState(initialNames?.[0] || 'Player 1');
  const [player2, setPlayer2] = useState(initialNames?.[1] || 'Player 2');

  useEffect(() => {
    setPlayer1(initialNames?.[0] || 'Player 1');
    setPlayer2(initialNames?.[1] || 'Player 2');
  }, [initialNames]);

  const handleSubmit = () => {
    if (player1.trim().toLowerCase() === player2.trim().toLowerCase()) {
      alert("Player 1 and Player 2 cannot have the same name.");
      return;
    }
    onSubmit(player1 || 'Player 1', player2 || 'Player 2');
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-black w-[80%] max-w-md p-6 text-center shadow-lg">
        <h2 className="text-red-500 text-3xl mb-6">Enter Player Names</h2>

        <input
          className="w-full mb-4 p-3 text-red-500 text-xl border border-gray-300 bg-white outline-none"
          type="text"
          placeholder="Player 1 Name"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
        />

        <input
          className="w-full mb-6 p-3 text-red-500 text-xl border border-gray-300 bg-white outline-none"
          type="text"
          placeholder="Player 2 Name"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white text-3xl w-full py-3 hover:bg-blue-700"
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default PlayerNamesModal;
