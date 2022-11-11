import {Server } from "socket.io"
import {messageHandler} from '../../utils/socket'


export default function SocketHandler(req, res) {

    let server = res.socket.server

    if(server.io){
        res.end()
        return;
    }

    const io = new Server(server)
    res.socket.server = io;

    const onConnection = (socket: any) =>{
        messageHandler(io,socket)
    }

    io.on("connection", onConnection)

    res.end()
}
