import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { media } from '../../../styles/media.styles';

import LOGO_PC from '/logo.png';
import LOGO_MO from '/logo_mo.png';

type LogoProps = {
  size: 'sm' | 'md';
};

function Logo({ size = 'sm' }: LogoProps) {
  return (
    <StyledLogo size={size}>
      <Link to={'/'}>
        <picture>
          {size === 'sm' && (
            <source srcSet={LOGO_MO} media='(max-width: 767px)' />
          )}
          <img src={LOGO_PC} alt='로고' />
        </picture>
      </Link>
    </StyledLogo>
  );
}

export const StyledLogo = styled.h1<LogoProps>`
  width: ${({ size }) => (size === 'sm' ? '15.3rem' : '39.6rem')};
  height: ${({ size }) => (size === 'sm' ? '5.1rem' : '13.2rem')};

  ${media.mo`
    width: ${({ size }) => (size === 'sm' ? '8.1rem' : '19.8rem')};
    height: ${({ size }) => (size === 'sm' ? '2.7rem' : '6.6rem')};
  `}
`;

export default Logo;
