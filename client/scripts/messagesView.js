var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    App.fetch((data) = function() {
      data.results.map(function(ele) {
         MessagesView.render(MessageView.render(ele));
      })
    });
  },
//look into when initialize is being called

  render: function(message) {
    // $.getJSON(`http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`, function(data) {
    //   console.log('got data', data);
    //   $('body').append(data);
    // })

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