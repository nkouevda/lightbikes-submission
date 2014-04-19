// Nikita Kouevda
// 2014/04/19

Bot.register('nkouevda', function(game_state, my_state, done) {
  var safe_dirs = game_state.board.safe_directions(game_state.me);

  done(safe_dirs[Math.floor(Math.random() * safe_dirs.length)]);
});
