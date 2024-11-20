import { Link } from 'react-router-dom';
import styled from 'styled-components';

type StyledIconLinkProps = {
  $size: 'sm' | 'md';
};

export const StyledIconLink = styled(Link)<StyledIconLinkProps>`
  display: inline-block;
  font-size: 0;
  line-height: 0;
  width: ${({ $size }) => ($size === 'sm' ? '1.8rem' : '4.2rem')};
  height: ${({ $size }) => ($size === 'sm' ? '1.8rem' : '4.2rem')};
`;
