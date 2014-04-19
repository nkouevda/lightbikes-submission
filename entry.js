// Nikita Kouevda
// 2014/04/19

Bot.register('nkouevda', function(board_state, player_state, move) {
  var safe_dirs = board_state.board.safe_directions(board_state.me);

  move(safe_dirs[Math.floor(Math.random() * safe_dirs.length)]);
})
