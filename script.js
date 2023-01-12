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
  // true signifies
  var turn = true;
  const setMove = (e) => {
    e.target.classList.add(turn ? 'cross' : 'naught');
    turn = !turn;
  };

  return {
    setMove,
  };
})();

cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
  cell.addEventListener('click', (e) => gameflow.setMove(e));
});
