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
      let user_id = elem.getAttribute('class').split(' ')[2].split('-')[1]
      let selected_user_id = elem.getAttribute('class').split(' ')[3].split('-')[1]
      if((user_id == data.sender_id || user_id == data.receiver_id) && (selected_user_id == data.sender_id || selected_user_id == data.receiver_id)){
        let div = document.createElement('div')
        if( user_id == data.sender_id){
          div.innerHTML = `
          <div>
            <div class='flex justify-end'>
              <div>
                <div class='flex justify-end'>
                  <span>${data.sender_name}</span>
                </div>
                <div class='flex justify-end'>
                  <div class="bg-amber-400 px-3.5 py-2 mr-2 rounded-bl-lg rounded-br-lg rounded-tl-lg">
                    <span class='text-sm opacity-70'>${data.message}</span><br>
                    <span class='float-right text-xs opacity-50'>${data.created_at_time}</span>
                  </div>
                  <img src="${data.image_url}", class='h-9 h-9 rounded-full' />
                </div>
              </div>
            </div>
          </div>  
        `
        }
        else{
          div.innerHTML = `
          <div>
            <div class='flex justify-start'>
              <div>
                <div class='flex justify-start'>
                  <span>${data.sender_name}</span>
                </div>
                <div class='flex justify-start'>
                  <img src="${data.image_url}", class='h-9 h-9 rounded-full' />
                  <div class="bg-cyan-100 px-3.5 py-2 ml-2 rounded-bl-lg rounded-br-lg rounded-tr-lg">
                    <span class='text-sm opacity-70'>${data.message}</span><br>
                    <span class='float-right text-xs opacity-50'>${data.created_at_time}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        `
        }
        elem.appendChild(div)
      }
    })
    let objDiv = document.querySelector(".messages");
    objDiv.scrollTop = objDiv.scrollHeight;
  }
});
