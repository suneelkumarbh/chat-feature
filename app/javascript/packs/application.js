// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// document.addEventListener('DOMContentLoaded', () => {
//   javascript_()
// })

document.addEventListener('turbolinks:load', function() {
  javascript_()
})

let javascript_ = () => {
  var objDiv = document.querySelector(".messages");
  objDiv.scrollTop = objDiv.scrollHeight;

  document.querySelector('#submit-message').addEventListener('click', function(e){
    e.preventDefault()
    document.querySelector('#send-message-form').submit()
    document.querySelector('#message_message').value = ''
  })
}