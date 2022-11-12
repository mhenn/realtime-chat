
export default (io, socket) => {

    const createdMessage = (msg) =>{
        socket.broadcast.emit("new", msg)
    }
    socket.on("created", createdMessage)
}
