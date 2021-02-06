import styled from 'styled-components';
import colors from '../../styles/colors';

export const WrapperChat = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
`;

export const ChatSection = styled.div`
  height: 100%;
  width: 50%;
  min-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > form {
    width: 100%;
    max-width: 500px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
    border-top: 1px solid ${colors.terceary};
    display: flex;
    justify-content: center;

    > input {
      flex: 1;
      border: 0;
      padding-left: 5px;
      color: ${colors.primary};
      height: 50px;
    }

    > button {
      background: ${colors.terceary};
      padding: 10px;
      color: ${colors.primary};
      font-weight: 500;
      font-size: 18px;
    }
  }
`;
