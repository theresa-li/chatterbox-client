var MessagesView = {

  $chats: $('#chats'),

  initialize: function() { 
    MessagesView.$chats.on('submit', MessagesView.render);
  },
  
  render: function(data) {
    // console.log("data",data);
    // for (var i = 0; i < data.results.length; i++) {
    //   MessageView.render(data.results[i]);
    // }
    this.$chats.append(MessageView.render(data));
  },

};