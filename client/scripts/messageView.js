var MessageView = {

  render: _.template(`
      
      <div class="chat">
        <div class="username"></div>

        <div>User: <%= username %></div>
        <div>roomname: <%= roomname %></div>
        <div>Text: <%= text %></div>
      </div>

    `)

};