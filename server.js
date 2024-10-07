const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/chatApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a schema and model for chat messages
const messageSchema = new mongoose.Schema({
    username: String,
    message: String,
    timestamp: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);

// Serve static files from the public directory
app.use(express.static('public'));

// Load previous messages
app.get('/messages', async (req, res) => {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.json(messages);
});

io.on('connection', (socket) => {
    console.log('A user connected');

    // Load messages when a user connects
    Message.find().sort({ timestamp: 1 }).then(messages => {
        socket.emit('load messages', messages);
    });

    socket.on('chat message', (msg) => {
        // Save the message to the database
        const message = new Message(msg);
        message.save().then(() => {
            io.emit('chat message', msg); // Broadcast the message to all clients
        });
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
