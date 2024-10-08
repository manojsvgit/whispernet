# WhisperNet

**WhisperNet** is a real-time anonymous chat application where users can send and receive messages without revealing their identity. The app features a simple UI and allows multiple users to communicate seamlessly over a network using Socket.IO.

## Demo

Check out the live demo of WhisperNet here: [WhisperNet Demo](https://whispernet-qq0p.onrender.com/)


## Features

- **Anonymous Chat**: Users can chat without signing in or registering.
- **Real-time Messaging**: Messages are sent and received instantly.
- **Custom Avatars**: Each message shows the sender's initials as an avatar.
- **Responsive Design**: Works well on both desktop and mobile devices.
- **Dark Mode UI**: Eye-friendly dark mode with modern aesthetics.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Real-time Communication**: Socket.IO
- **Deployment**: Local environment or cloud hosting

## Setup Instructions

To run the project locally, follow these steps:

### Prerequisites

- **Node.js** installed on your system
- **NPM** (Node Package Manager) installed

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/whispernet.git
    cd whispernet
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```
3. **Start the server**:
    ```bash
    node server.js
    ```

4. **Access the chat application**:  
   Open your browser and navigate to:
   ```bash
   http://localhost:3000
   ```


## Usage
- Enter a username: After accessing the application, input a username to start chatting.
- Send messages: Type your message in the input box and hit the send button or press "Enter."
- Real-time chat: Your messages will appear instantly in the chat window, and you'll see other users' messages as they are received.

## Folder Structure
```bash
WhisperNet/
│
├── public/                 # Static frontend files
│   ├── index.html          # Main HTML file
│   ├── styles.css          # Styles for the chat UI
│   └── script.js           # Client-side logic
│
├── server.js               # Node.js server setup
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation

```
## License
- This project is open-source under the MIT License.
