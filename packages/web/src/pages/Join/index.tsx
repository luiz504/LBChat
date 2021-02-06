import React, { useCallback, FormEvent, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { WrapperJoin, BoxToForm } from './styles';

const Join: React.FC = () => {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputRoomRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      const name = inputNameRef.current?.value;
      const room = inputRoomRef.current?.value;

      if (name && room) {
        history.push(`/chat?name=${name}&room=${room}`);
      }
    },
    [history],
  );
  return (
    <WrapperJoin>
      <BoxToForm>
        <h1> Join </h1>

        <form onSubmit={handleSubmit}>
          <input
            ref={inputNameRef}
            placeholder="Name"
            defaultValue="Luiz"
            required
          />
          <input
            ref={inputRoomRef}
            placeholder="Room"
            defaultValue="Chat"
            required
          />
          <button type="submit"> Join chat</button>
        </form>
      </BoxToForm>
    </WrapperJoin>
  );
};

export default Join;
