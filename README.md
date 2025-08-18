# Paradox-XX

## :question: What's Paradox-XX?

**Paradox-XX** is a [**misère and impartial form of tic-tac-toe**](https://en.wikipedia.org/wiki/Tic-tac-toe_variants). Also known as reverse tic-tac-toe, this variant turns the normal rules of tic-tac-toe on their head. It uses [misère rules](https://en.wikipedia.org/wiki/Mis%C3%A8re), which means if you line up three marks in a row, you _lose_. And it's impartial, so both players use **X** and play on one to more grids, or boards. This turns tic-tac-toe into a **strategic zero-sum game**—like [**misère Nim**](https://www.hackerrank.com/challenges/misere-nim-1/problem).

## :gear: Game Mechanics

In this implementation of notakto:

* You can play on one to five boards.
* Boards can have between 2x2 and 5x5 cells.
* The player that completes a row, a column, or the diagonal _loses_ that board.
* The app deactivates boards with a complete row, column, or diagonal—they become a "dead" board.

For example, to play a game with three 3x3 boards:

1. Player one puts an **X** in any position on any board.
1. Player two puts an **X** in any other position on any board.
1. Each player continues putting **X**s until they complete a row, a column, or the diagonal in a single board. That board is complete—players can't place any more **X**s there.
1. The players continue completing boards. _The player that completes the final board loses_.


 <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/477e6e35-9395-43e5-b505-21ba1355134b" />


## :video_game: Game Modes

You can play the game in three modes:

| Mode | Description |
|:-----|:------------|
| **Play vs Computer** | Play against AI with five difficulty levels. |
| **Play vs Player** | Play with a friend on the same device. |
| **Live Match** | Play against other in real-time matches over the internet. |

## :robot: AI Engine

This project's AI engine uses center-weighted heuristics and misère Nim strategies to play the game. You can scale the engine from easy (1) to hard (5). At lower difficulties, the engine introduces more randomness in its guesses.

## :sparkler: Coins and Power-ups

Get coins for each game you win. Use those coins to buy power-ups, like **Undo Move** and **Skip Move** from the in-game **Settings** menu.

## :globe_with_meridians: Multiplayer (Live Match)

Play against others over the internet and climb the public leaderboard (coming soon!). Every win in the Live Match mode earns you XP. The more XP you earn, the higher your position on the leaderboard.

The game client uses [`Socket.IO`](https://socket.io/) to connect to a server. The server:

* Pairs players in matches
* Manages rooms that host both players
* Synchronizes moves from each player
* Disconnects each player from the room at the end of the game or when the player leaves.

## :package: Third-Party Packages

This project combines third-party packages to add crucial features to the app:

* :key: [Firebase Authentication](https://firebase.google.com/docs/auth) lets users sign in with their Google account.
* :lock: [Cloud Firestore](https://firebase.google.com/products/firestore) saves users' coins and XP.
* :money_with_wings: [Coinbase Commerce](https://www.coinbase.com/commerce) accepts cryptocurrency payments so users can buy extra coins.

## :art: User interface and experience

The game client uses a retro 8-bit theme with nostalgic sound effects. And all features work seamlessly on both desktop and mobile browsers.

## :rocket: Planned Features

1. Global leaderboard (XP-based)
2. Friend list and “Play with Friends” mode
3. Ads integration with an option to pay to remove them
4. Crash analytics, logging, and user tracking
6. Automated test scripts


## 💻 Running Locally

For local development without containerization:

1.  *Ensure Node.js and pnpm are installed* on your system.

2.  *Install Dependencies*:
    ```bash
    pnpm install
    ```
    

3.  *Run Development Servers*:
    ```bash
    pnpm dev:local
    ```
   
