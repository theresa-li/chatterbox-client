var MessagesView = {

  $chats: $('#chats'),

  initialize: function() { 
    MessagesView.$chats.on('submit', MessagesView.render);
  },
  
  render: function(data) {
    this.$chats.append(MessageView.render(data));
  },

};