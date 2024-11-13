const socket = io("https://chat-app-delta-sepia.vercel.app/"); // Replace with your backend URL

// DOM elements
const sendButton = document.getElementById("send-button");
const messageInput = document.getElementById("message-input");
const messagesDiv = document.getElementById("messages");

// Send message on button click
sendButton.addEventListener("click", () => {
  const message = messageInput.value;
  if (message) {
    socket.emit("sendMessage", message); // Emit message to the server
    messageInput.value = ""; // Clear the input field
  }
});

// Listen for incoming messages from the server
socket.on("receiveMessage", (message) => {
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messagesDiv.appendChild(messageElement); // Display message
});
