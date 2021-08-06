import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 24px;
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  line-height: 26px;
`;
