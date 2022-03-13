import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    document.querySelectorAll('.messages').forEach( elem => {
      let div = document.createElement('div')
      let user_id = elem.getAttribute('class').split(' ')[2].split('-')[1]
      if( user_id == data.sender_id){
        var float = 'float-right'
      }
      else{
        var float = 'float-left'
      }
      div.innerHTML = `<span class='${float}'>${data.message}</span><br/>`
      elem.appendChild(div)
    })
    let objDiv = document.querySelector(".messages");
    objDiv.scrollTop = objDiv.scrollHeight;
  }
});
