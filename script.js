/*
document.addEventListener("DOMContentLoaded", function(e) {
  // Name can't be blank
  let user = ""
  while (user == "") {
    user = prompt("Please enter your name")
  }
  document.querySelector("#sender").value = user
  grabMessages()
  const refreshInterval = setInterval(function() {
    grabMessages()
  }, 100)
  const form = document.querySelector("#chatForm")
  form.addEventListener("submit", function(e) {
    e.preventDefault()
    postMessage(e.target)
  })
})

function grabMessages() {
  fetch("https://fierce-wave-66462.herokuapp.com/messages")
    .then(resp => resp.json())
    .then(function(messages) {
      renderMessages(messages)
    })
}

function postMessage(form) {
  fetch("https://fierce-wave-66462.herokuapp.com/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      sender: form.sender.value,
      message: form.message.value
    })
  })
    .then(resp => resp.json())
    .then(function(json) {
      grabMessages()
      form.message.value = ""
    })
}

function renderMessages(messages) {
  const length = messages.length
  const mostRecent = messages.slice(length - 50)
  const list = document.querySelector("#message-list")
  let newList = ""
  mostRecent.forEach(message => {
    if (!!!document.querySelector(`li[data-id='${message.id}']`)) {
      newList += makeLi(message)
    }
  })
  if (newList != "") {
    list.innerHTML += newList
  }
}

function makeLi(message) {
  // Some logic to make your own messages say You instead of your name
  let sender = document.querySelector("#sender").value
  if (message.sender == sender) {
    sender = "You"
  } else {
    sender = message.sender
  }
  //prettier-ignore
  return `
    <li data-id='${message.id}'><strong>${sender}:</strong>${message.message}</li>
    `
}
*/
