import styled from 'styled-components';
import colors from '../../styles/colors';

export const WrapperChatBox = styled.div`
  height: 100%;
  max-height: 500px;
  width: 100%;
  max-width: 500px;
  padding: 10px;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  background: ${colors.white};
  overflow-y: auto;
`;
