// Nikita Kouevda
// 2014/04/19

Bot.register('nkouevda', function(board_state, player_state, move) {
  var me = board_state.me;
  var board = board_state.board;
  var safe_dirs = board.safe_directions(me);

  var ordered_safe_dirs = [];

  if (_.contains(safe_dirs, me.sharp_left())) {
    ordered_safe_dirs.push(me.sharp_left());
  }

  if (_.contains(safe_dirs, me.left())) {
    ordered_safe_dirs.push(me.left());
  }

  if (_.contains(safe_dirs, me.straight())) {
    ordered_safe_dirs.push(me.straight());
  }

  if (_.contains(safe_dirs, me.right())) {
    ordered_safe_dirs.push(me.right());
  }

  if (_.contains(safe_dirs, me.sharp_right())) {
    ordered_safe_dirs.push(me.sharp_right());
  }

  var dest = board.new_coords_from_dir(me, ordered_safe_dirs[0]);
  var best_dir = ordered_safe_dirs[0];
  var best_num_opts = board.safe_surrounding_tiles(dest).length;
  var num_opts;

  for (var i = 1; i < ordered_safe_dirs.length; ++i) {
    dest = board.new_coords_from_dir(me, ordered_safe_dirs[i]);
    num_opts = board.safe_surrounding_tiles(dest).length;

    if (num_opts > best_num_opts) {
      num_opts = best_num_opts;
      best_dir = ordered_safe_dirs[i];
    }
  }

  move(best_dir);
})
