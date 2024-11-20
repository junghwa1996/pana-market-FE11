import styled from 'styled-components';
import font from '../../styles/fontStyle.styles';

export const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
  padding: 1.6rem 2.3rem;
  ${font('16m')}
  color: var(--gray-800);
  border-radius: 0.8rem;
  background-color: #e6f2ff;
  margin: 2.4rem 0;
  p {
    flex: 1;
  }
`;
