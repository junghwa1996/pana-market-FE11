import styled from 'styled-components';
import { Container } from '../../styles/Common.styles';
import font from '../../styles/fontStyle.styles';

export const StyledFooter = styled.footer`
  height: 16rem;
  padding-top: 3.2rem;
  background-color: var(--gray-900);
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export const FooterItem = styled.div`
  ${font('16')}
  &.text-copyright p {
    color: var(--gray-400);
  }
  &.link-page {
    display: flex;
    gap: 3rem;
    a {
      color: var(--gray-200);
    }
  }
  &.link-sns {
    display: flex;
    gap: 1.2rem;
  }
`;
