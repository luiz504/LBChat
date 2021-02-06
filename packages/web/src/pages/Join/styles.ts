import styled from 'styled-components';
import colors from '../../styles/colors';

export const WrapperJoin = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxToForm = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 15px;

  background: ${colors.secondary};
  padding: 15px;

  h1 {
    text-align: center;
    color: ${colors.white};
  }

  form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;

    input + input {
      margin-top: 15px;
    }
    > input {
      border-radius: 5px;
      height: 40px;
      padding: 15px;
      color: ${colors.primary};
      ::placeholder {
        color: ${colors.placeholder};
      }
    }

    > button {
      margin-top: 30px;
      font-weight: 500;
      color: ${colors.primary};
      height: 40px;
      background: ${colors.terceary};
      border-radius: 5px;
    }
  }
`;
