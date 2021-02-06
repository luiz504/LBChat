import React, {
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import queryString from 'query-string';
import { io, Socket } from 'socket.io-client';

import { useLocation } from 'react-router-dom';
import { WrapperChat, ChatSection } from './styles';

import ChatBox from '../../components/ChatBox';
import InfoSection from '../../components/InfoSection';

interface IMessage {
  user: string;
  text: string;
}

let socketRef: Socket;

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  // const [socketRef] = useState(() => io('localhost:3333'));
  const { search } = useLocation();
  const { name, room } = queryString.parse(search);

  const ENDPOINTWS = 'localhost:3333';

  // const socketRef = useRef<Socket>(io(ENDPOINTWS));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    socketRef = io(ENDPOINTWS); // trigger io.on 'connection'
    socketRef.emit('join', { name, room });

    return () => {
      socketRef.emit('leave');
      socketRef.off();
    };
  }, [search, name, room]);

  useEffect(() => {
    socketRef.on('message', (message: IMessage) => {
      setMessages((old) => [...old, message]);
    });
  }, []);

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    const message = inputRef.current?.value;

    if (!message) {
      return;
    }

    socketRef.emit('sendMessage', message, () => {
      if (inputRef.current) {
        inputRef.current.value = 'hello word!';
      }
    });
  }, []);

  return (
    <WrapperChat>
      <ChatSection>
        <ChatBox messages={messages} currentUserName={name} />
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            placeholder="type your message"
            defaultValue="hello Word!"
          />
          <button type="submit"> Send </button>
        </form>
      </ChatSection>
      <InfoSection />
    </WrapperChat>
  );
};

export default Chat;
