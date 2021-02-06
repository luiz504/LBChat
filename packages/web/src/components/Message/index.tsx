import React, { useMemo } from 'react';
import ReactEmoji from 'react-emoji';

import { WrapperMessage } from './styles';

interface IMessage {
  user: string;
  text: string;
}
interface IProps {
  message: IMessage;
  currentUserName: string | string[] | null;
}

const Message: React.FC<IProps> = ({
  message: { user, text },
  currentUserName,
}) => {
  const isSentByCurrentUser = useMemo(() => {
    return (
      currentUserName?.toString().toLowerCase() === user.trim().toLowerCase()
    );
  }, [currentUserName, user]);

  return (
    <WrapperMessage isCurrentUser={isSentByCurrentUser}>
      <p>{user}</p>
      <div>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
    </WrapperMessage>
  );
};

export default Message;
