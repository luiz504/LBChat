import React from 'react';
import { v4 } from 'uuid';
import Message from '../Message';

import { WrapperChatBox } from './styles';

interface IMessage {
  user: string;
  text: string;
}

interface IProps {
  messages: IMessage[];
  currentUserName: string | string[] | null;
}
const ChatBox: React.FC<IProps> = ({ messages, currentUserName }) => {
  return (
    <WrapperChatBox>
      {!!messages.length &&
        messages.map((message) => (
          <Message
            message={message}
            currentUserName={currentUserName}
            key={v4()}
          />
        ))}
    </WrapperChatBox>
  );
};

export default ChatBox;
