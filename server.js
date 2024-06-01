const express = require('express');
//const http = require('http');
//const { createServer } = require('node:http');
//const { Server } = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
const { login } = require('./login');4
require('dotenv').config()

const app = express();
//const server = createServer(app);
//const io = new Server(server, { cors: { origin: 'http://localhost:5173' } });

app.use(bodyParser.json());
app.use(cors()); // Enable CORS


app.get('/',(req,res)=>{
  res.send(process.env.PORT)
})
app.post("/auth/login",login)

const PORT = process.env.PORT || 8000;



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
