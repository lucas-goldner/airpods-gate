import { Injectable } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { DeviceMotionData } from './model/DeviceMotionData';

@Injectable()
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway {
  @WebSocketServer() server: Server;

  @SubscribeMessage('events')
  sendEvents(@MessageBody() data: DeviceMotionData) {
    this.server.emit('get_events', data);
  }
}
