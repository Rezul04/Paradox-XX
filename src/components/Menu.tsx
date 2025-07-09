import { MenuProps } from "../services/types";

const Menu = ({ startGame, showTutorial, signed, signIn, signOut, toggleMute, isMuted }: MenuProps) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 w-full max-w-md px-4">
        <h1 className="text-white text-[80px]">Notakto</h1>

        <button onClick={() => startGame('vsPlayer')} className="w-full bg-blue-600 py-4 text-white text-2xl ">
          Play vs Player
        </button>

        <button onClick={() => startGame('vsComputer')} className="w-full bg-blue-600 py-4 text-white text-2xl ">
          Play vs Computer
        </button>

        <button onClick={() => startGame('liveMatch')} className="w-full bg-blue-600 py-4 text-white text-2xl ">
          Live Match
        </button>

        <button onClick={showTutorial} className="w-full bg-blue-600 py-4 text-white text-2xl ">
          Tutorial
        </button>

        {signed ? (
          <button onClick={signOut} className="w-full bg-blue-600 py-4 text-white text-2xl ">
            Sign Out
          </button>
        ) : (
          <button onClick={signIn} className="w-full bg-blue-600 py-4 text-white text-2xl">
            Sign In
          </button>
        )}
        <button onClick={toggleMute} className="w-full bg-blue-600 py-4 text-white text-[30px]">
          Sound: {isMuted ? 'Off' : 'On'}
        </button>
      </div>
    </div>
  );
};

export default Menu;
