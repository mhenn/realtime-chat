import {Server } from "socket.io"
import {Server as HTTPServer} from 'http'
import messageHandler from '../../utils/socket'


export default function SocketHandler(req, res) {

if (!res.socket.server.io) {
    console.log("New Socket.io server...");
    // adapt Next's net Server to http Server
    const httpServer: HTTPServer = res.socket.server as any;
    const io = new Server(httpServer, {
      path: "/api/socketio",
    });
    // append SocketIO server to Next.js socket server response
    res.socket.server.io = io;
  }
  res.end();

//
//    if(res.socket.server.io){
//        res.end()
//        return;
//    }
//    console.log("bre")
//
//    const io = new Server(res.socket.server)
//    res.socket.server = io;
//
//    const onConnection = (socket: any) =>{
//        messageHandler(io,socket)
//    }
//
//    io.on("connection", onConnection)
//
//    res.end()
}
