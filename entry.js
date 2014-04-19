// Nikita Kouevda
// 2014/04/19

Bot.register('nkouevda', function(board_state, player_state, move) {
  var me = board_state.me;
  var them = board_state.them;
  var board = board_state.board;
  var safe_dirs = board.safe_directions(me);

  if (_.contains(safe_dirs, me.left())) {
    move(me.left());
  } else if(_.contains(safe_dirs, me.straight())) {
    move(me.straight());
  } else if(_.contains(safe_dirs, me.right())) {
    move(me.right());
  } else if(_.contains(safe_dirs, me.sharp_right())) {
    move(me.sharp_right());
  } else {
    move(me.sharp_left());
  }
})
