import styled from 'styled-components';
import colors from '../../styles/colors';

export const WrapperInfoSection = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > button {
    background: ${colors.terceary};
    padding: 5px;
    color: ${colors.primary};
    font-weight: 500;
    font-size: 18px;
    border-radius: 5px;
    opacity: 0.9;
  }
`;
