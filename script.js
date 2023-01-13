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
  var turn = true;
  const setMove = (cell) => {
    let cell_index = cell.id.replace('cell-', '');
    if (!gameboard.isEmpty(cell_index)) {
      console.log(`Cell ${cell_index} is taken`);
      return;
    }

    let player = turn ? 'cross' : 'naught';

    cell.classList.add(player);
    gameboard.setCell(cell_index, player);
    turn = !turn;
  };

  // Button to reset
  const reset = () => {
    cells.forEach((cell) => {
      cell.classList = 'cell';
    });
    //set turn to 'x' player
    turn = true;
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
