var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {

    // Stop the browser from submitting the form
    event.preventDefault();

    console.log("event",event);
    
    var posted = function() {
      console.log('posted!');
    }
    Messages.text = event.target[0].value;
    Messages.username = App.username;
    Parse.create(Messages, Parse.readAll(posted)); // args: message, successCB
    console.log('click!');
    App.initialize();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};