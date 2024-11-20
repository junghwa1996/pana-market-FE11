import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import font from '../../styles/fontStyle.styles';

function SignupPrompt() {
  const location = useLocation();
  const isPathname = location.pathname;

  return (
    <StyledSignupPrompt>
      {isPathname === '/login'
        ? '판다마켓이 처음이신가요?'
        : '이미 회원이신가요?'}
      {isPathname === '/login' ? (
        <StyledLink to='/signup'>회원가입</StyledLink>
      ) : (
        <StyledLink to='/login'>로그인</StyledLink>
      )}
    </StyledSignupPrompt>
  );
}

const StyledSignupPrompt = styled.p`
  text-align: center;
  ${font('14m')}
`;
const StyledLink = styled(Link)`
  ${font('15m')}
  margin-left: .4rem;
  color: #3182f6;
  text-decoration: underline;
`;

export default SignupPrompt;
