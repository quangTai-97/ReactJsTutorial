const io = require("socket.io")(5500, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((u) => u.socketId !== socketId);
};

const getUser = (receiverId) => {
  const user = users.find((u) => u.userId === receiverId);

  return user;
};

io.on("connection", (socket) => {
  console.log("a user connected");

  //take userId and SocketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message

  socket.on("sendMessage", ({ fileName, senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
      fileName,
    });
  });

  //When disconnected

  socket.on("disconnect", () => {
    console.log("a user disconnected !");
    console.log("users", users);
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
