var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log("data",data);
      for(var i = 0; i < data.results.length; i++) {
        if (data.results[i].username && data.results[i].text){
          MessagesView.render(data.results[i]);
          if (data.results[i].roomname && !Rooms.roomname[data.results[i].roomname]) {
            Rooms.roomname[data.results[i].roomname] = data.results[i].roomname;
            RoomsView.render(data.results[i].roomname);
          }
        }
      }
      
      

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
