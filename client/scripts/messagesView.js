var MessagesView = {

  $chats: $('#chats'),

  initialize: function() { 
    MessagesView.$chats.on('submit', MessagesView.render);
  },
  
  render: function(message) {
    this.$chats.append('<div><div class="username">' + message.username + '</div><div>' + message.text + '</div></div>');
    console.log(message);
  },

};