import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { LiveProps } from '../services/types';

const SERVER_URL = "https://deciduous-incongruous-herring.glitch.me";
const socket = io(SERVER_URL);

const LiveMode = ({ onClose }: LiveProps) => {
  const [boards, setBoards] = useState(
    Array(3)
      .fill('')
      .map(() => ({ grid: Array(9).fill(""), blocked: false }))
  );
  const [isMyTurn, setIsMyTurn] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [gameState, setGameState] = useState<"searching" | "playing">("searching");

  useEffect(() => {
    socket.connect();
    socket.emit("joinGame");

    socket.on("gameStart", (data: { roomId: string; firstTurn: string }) => {
      setRoomId(data.roomId);
      setGameState("playing");
      setIsMyTurn(socket.id === data.firstTurn);
    });

    socket.on("updateBoards", (data: { boards: any[]; nextTurn: string }) => {
      setBoards(data.boards);
      setIsMyTurn(socket.id === data.nextTurn);
    });

    socket.on("gameOver", (data: { loser: string }) => {
      alert(data.loser === socket.id ? "You Lost!" : "You Won!");
      resetGame();
    });

    socket.on("opponentDisconnected", () => {
      alert("Opponent Disconnected! Searching for new match...");
      resetGame();
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleMove = (boardIndex: number, cellIndex: number) => {
    if (!isMyTurn || boards[boardIndex].blocked || boards[boardIndex].grid[cellIndex] !== "" || !roomId) return;
    socket.emit("makeMove", { roomId, boardIndex, cellIndex });
  };

  const resetGame = () => {
    setBoards(
      Array(3)
        .fill('')
        .map(() => ({ grid: Array(9).fill(""), blocked: false }))
    );
    setGameState("searching");
    socket.emit("joinGame");
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      <div className="flex-1 flex flex-col justify-center items-center px-4">
        {gameState === "playing" ? (
          <>
            <h1 className="text-5xl text-red-600 mb-6">
              {isMyTurn ? "Your Turn" : "Opponent's Turn"}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
              {boards.map((board, boardIndex) => (
                <div
                  key={boardIndex}
                  className={`w-[300px] h-[300px] flex flex-wrap bg-black ${board.blocked ? "opacity-50" : ""}`}
                >
                  {board.grid.map((cell, cellIndex) => (
                    <button
                      key={cellIndex}
                      onClick={() => handleMove(boardIndex, cellIndex)}
                      disabled={!isMyTurn || board.blocked || cell !== ""}
                      className="w-1/3 h-1/3 border border-gray-300 flex items-center justify-center bg-black"
                    >
                      <span className="text-[100px] text-red-600">{cell}</span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-5">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-white text-2xl">Searching for opponent...</p>
          </div>
        )}
      </div>
      <div className="w-full bg-red-600 py-3 text-center mt-auto">
        <button onClick={onClose} className="text-white text-2xl">
          Leave
        </button>
      </div>
    </div>
  );
};

export default LiveMode;
