const gameboard = (() => {
  var board = [
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
})();

const gameflow = (() => {
  // true signifies crosses and flase is naughts
  var turn = true;
  const setMove = (e) => {
    e.target.classList.add(turn ? 'cross' : 'naught');
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
  cell.addEventListener('click', (e) => gameflow.setMove(e));
});
document.querySelector('.reset').addEventListener('click', gameflow.reset);
