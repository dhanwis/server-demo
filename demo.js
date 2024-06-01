
const notifications = ['notification1', 'notification2'];

// Handle POST request to /sendData
app.post('/sendData', (req, res) => {
  console.log(req.body);
  res.status(200).send('Data received successfully');
});

// Handle GET request to /getNotifications
app.get('/getNotifications', (req, res) => {
  res.status(200).json(notifications);
});

// Handle socket connections
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Example: Send notifications to the connected client
  socket.emit('notifications', notifications);

  // Example: Listen for custom events from the client
  socket.on('customEvent', (data) => {
    console.log('Received custom event:', data);
    // You can process the data received from the client here
  });

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});