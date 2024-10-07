const socket = io(); // Connect to the server

let username = '';

// Get the username from the input field
document.getElementById("usernameInput").addEventListener("change", function() {
    username = this.value.trim();
});

// Load previous messages
fetch('/messages')
    .then(response => response.json())
    .then(messages => {
        messages.forEach(msg => {
            // Use the appropriate function based on the username
            if (msg.username === username) {
                appendSentMessage(msg.message, msg.username);
            } else {
                appendReceivedMessage(msg.message, msg.username);
            }
        });
        const messagesDiv = document.getElementById("messages");
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
    });

// Handle send button click
document.getElementById("sendButton").addEventListener("click", function() {
    const messageInput = document.getElementById("messageInput");
    const messageText = messageInput.value.trim();

    if (messageText && username) {
        const msg = { username, message: messageText }; 
        socket.emit('chat message', msg); // Send message to the server
        appendSentMessage(messageText, username); // Append the sent message to the chat
        messageInput.value = ""; // Clear the input
    }
});

// Receive messages from the server
socket.on('chat message', function(msg) {
    appendReceivedMessage(msg.message, msg.username); // Use the function to append the message
});

// Allow sending messages with the Enter key
document.getElementById("messageInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("sendButton").click();
    }
});

// Function to append a sent message
function appendSentMessage(message, username) {
    const messagesDiv = document.getElementById("messages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "sent");

    const avatarDiv = document.createElement("div");
    avatarDiv.classList.add("avatar");
    avatarDiv.textContent = username.charAt(0); // Use the first initial of the username

    const p = document.createElement("p");
    p.textContent = message;

    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(p);
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
}

// Function to append a received message
function appendReceivedMessage(message, username) {
    const messagesDiv = document.getElementById("messages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "received");

    const avatarDiv = document.createElement("div");
    avatarDiv.classList.add("avatar");
    avatarDiv.textContent = username.charAt(0); // Use the first initial of the username

    const p = document.createElement("p");
    p.textContent = message;

    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(p);
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
}
