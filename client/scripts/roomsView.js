var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.render);
  },

  render: function(roomname) {
    // console.log('room data', roomname);
    RoomsView.$select.append('<option>' + roomname + '</option>');
  }

};
