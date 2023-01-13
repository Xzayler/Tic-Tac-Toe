const gameboard = (() => {
  let board = [
    'empty',
    'empty',
    'empty',
    'empty',
    'empty',
    'empty',
    'empty',
    'empty',
    'empty',
  ];

  const setCell = (cell_index, symbol) => {
    board[cell_index] = symbol;
  };

  const isEmpty = (cell_index) => {
    return board[cell_index] == 'empty';
  };

  const isGameOver = () => {
    if (
      //3 in a row
      (board[0] == board[1] && board[0] == board[2] && board[0] != 'empty') ||
      (board[3] == board[4] && board[3] == board[5] && board[3] != 'empty') ||
      (board[6] == board[7] && board[6] == board[8] && board[6] != 'empty') ||
      //3 in a column
      (board[0] == board[3] && board[0] == board[6] && board[0] != 'empty') ||
      (board[1] == board[4] && board[1] == board[7] && board[1] != 'empty') ||
      (board[2] == board[5] && board[2] == board[8] && board[2] != 'empty') ||
      //3 diagonally
      (board[0] == board[4] && board[0] == board[8] && board[0] != 'empty') ||
      (board[2] == board[4] && board[2] == board[6] && board[2] != 'empty')
    ) {
      return true;
    }
    return false;
  };

  return {
    isEmpty,
    setCell,
    isGameOver,
  };
})();

const gameflow = (() => {
  // true signifies crosses and flase is naughts
  var player = true;
  var turn_count = 0;
  const setMove = (cell) => {
    let cell_index = cell.id[5];
    if (!gameboard.isEmpty(cell_index)) {
      console.log(`Cell ${cell_index} is taken`);
      return;
    }

    let player_symbol = player ? 'cross' : 'naught';

    cell.classList.add(player_symbol);
    gameboard.setCell(cell_index, player_symbol);
    ++turn_count;
    console.log(turn_count);
    player = !player;

    if (turn_count < 5) {
      return;
    }
    if (gameboard.isGameOver()) {
      console.log(`Winner is ${player_symbol}`);
    }
  };

  // Button to reset
  const reset = () => {
    cells.forEach((cell) => {
      cell.classList = 'cell';
    });
    //set player to 'x' player
    player = true;
    turn_count = 0;
  };

  return {
    setMove,
    reset,
  };
})();

cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
  cell.addEventListener('click', (e) => gameflow.setMove(e.target));
});
document.querySelector('.reset').addEventListener('click', gameflow.reset);
