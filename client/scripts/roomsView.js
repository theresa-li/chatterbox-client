var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on('click', this.handleSubmit);
  },

  render: function(message) {
    this.$select.append('<div class="roomname">' + message.roomname + '</div>');
  }

};
