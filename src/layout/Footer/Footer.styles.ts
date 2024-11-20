import styled from 'styled-components';
import { Container } from '../../styles/Common.styles';
import font from '../../styles/fontStyle.styles';
import { media } from '../../styles/media.styles';

export const StyledFooter = styled.footer`
  height: 16rem;
  padding-top: 3.2rem;
  background-color: var(--gray-900);
  ${media.mo`
    padding: 3.2rem; 
  `}
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  ${media.mo`
    flex-wrap: wrap;
    gap: 6rem 0;
  `}
`;

export const FooterItem = styled.div`
  ${font('16')}
  &.text-copyright {
    ${media.mo`
      order: 2;
      flex: 1;
    `}
    p {
      color: var(--gray-400);
      ${media.mo`
        color: #676767;
      `}
    }
  }
  &.link-page {
    display: flex;
    gap: 3rem;
    ${media.mo`
      flex: 1;
    `}
    a {
      color: var(--gray-200);
      ${media.mo`
        color: #cfcfcf;
      `}
    }
  }
  &.link-sns {
    display: flex;
    gap: 1.2rem;
    ${media.mo`
      flex: 1;
    `}
  }
`;
