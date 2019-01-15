var MessagesView = {
//var delivery = data.results;
  $chats: $('#chats'),

  initialize: function() {
    App.fetch((delivery) = function() {
        for (var key in delivery.results) {
          console.log(delivery.results[key].objectId)

          $('#chats').append(MessageView.render(delivery.results[key]));
        }
           

      });
  },
  //look into when initialize is being called

  render: function(message) {

    MessagesView.$chats.append(message);
    // $.ajax({
    //   url: "http://parse.sfm6.hackreactor.com/chatterbox/classes/messages",
    //   dataType: "json",
    //   success: 
    //   function(message) {
    //   var cool = [];
    //   for (var i = 0 ; i < message.length; i++) {
    //     cool[i] = message.results[i].text;
    //    }
    //   }
    // })
    // var compiled = _.template("hello: <%= message %>");
  },

  renderMessage: function(message) {
    MessagesView.$chats.append(message);
  }

};