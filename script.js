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

  return {
    isEmpty,
    setCell,
  };
})();

const gameflow = (() => {
  // true signifies crosses and flase is naughts
  var player = true;
  var turn_count = 0;
  const setMove = (cell) => {
    let cell_index = cell.id.replace('cell-', '');
    if (!gameboard.isEmpty(cell_index)) {
      console.log(`Cell ${cell_index} is taken`);
      return;
    }

    let player_symbol = player ? 'cross' : 'naught';

    cell.classList.add(player_symbol);
    gameboard.setCell(cell_index, player_symbol);
    player = !player;
    ++turn_count;
    console.log(turn_count);
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
