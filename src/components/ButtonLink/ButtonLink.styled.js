import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.604167vw;
  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 50px;
  padding: 13px 24px;
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  line-height: 26px;
  transition: ${({ theme }) => theme.getTransitions(['background-color'])};

  > svg {
    width: 1.25vw;
    height: auto;
    margin-left: 1.145833vw;
    fill: currentColor;
    transition: ${({ theme }) => theme.getTransitions(['transform'])};
  }

  &:hover {
    background-color: #fff;

    > svg {
      transform: translateX(33%);
    }
  }
`;
