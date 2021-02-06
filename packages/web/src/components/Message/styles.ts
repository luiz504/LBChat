import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

interface IWrapperMessageProps {
  isCurrentUser: boolean;
}
export const WrapperMessage = styled.div<IWrapperMessageProps>`
  & + div {
    margin-top: 10px;
  }
  display: flex;
  align-items: center;

  > p {
    color: ${colors.success};
  }
  > div {
    border-radius: 5px;
    padding: 10px;
  }

  ${(props) =>
    props.isCurrentUser
      ? css`
          justify-content: flex-end;

          > p {
            color: ${colors.info};
            font-weight: 500;
          }
          > div {
            background: ${colors.infobg};
            margin-left: 10px;

            > p {
              color: ${colors.primary};
            }
          }
        `
      : css`
          flex-direction: row-reverse;
          width: fit-content;

          > p {
            color: ${colors.success};
            font-weight: 500;
          }

          > div {
            margin-right: 10px;
            background: ${colors.info};
            > p {
              color: ${colors.white};
            }
          }
        `}
`;
