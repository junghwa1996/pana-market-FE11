import { ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';

import styled from 'styled-components';
import { Container, Page } from '../../styles/Common.styles';
import { flexColumn } from '../../styles/layout.styles';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Alternative from '../../components/Alternative/Alternative';
import SignupPrompt from '../../components/SignupPrompt/SignupPrompt';
import Logo from '../../components/Shared/Logo/Logo';
import { media } from '../../styles/media.styles';
import { useAuth } from '../../context/AuthContext';

function LoginPage() {
  const { formValues, formErrors, isFormValid, handleChange } = useForm({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const { setHasLogin } = useAuth();

  // 폼 제출 핸들러
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) return;
    setHasLogin(true);
    navigate('/');
  };

  return (
    <StyledLoginPage>
      <Container>
        <StyledLogoContainer>
          <Logo size='md' />
        </StyledLogoContainer>
        <StyledInner>
          <StyledLoginPageForm onSubmit={handleSubmit}>
            <Input
              type='email'
              name='email'
              title='이메일'
              value={formValues.email}
              isError={!!formErrors.email}
              placeholder='이메일을 입력해주세요'
              autoComplete='email'
              errorMessage={formErrors.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(e.target.name, e.target.value)
              }
            />
            <Input
              type='password'
              name='password'
              title='비밀번호'
              value={formValues.password}
              isError={!!formErrors.password}
              placeholder='비밀번호를 입력해주세요'
              autoComplete='current-password'
              errorMessage={formErrors.password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(e.target.name, e.target.value)
              }
            />
            <Button
              color={isFormValid ? 'blue' : 'gray'}
              disabled={!isFormValid}
              size='large'
              round
              wide>
              로그인
            </Button>
          </StyledLoginPageForm>
          <Alternative />
          <SignupPrompt />
        </StyledInner>
      </Container>
    </StyledLoginPage>
  );
}

const StyledLoginPage = styled(Page)`
  height: 100vh;
`;

const StyledInner = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  ${media.mo`
    max-width: 100%;
  `}
`;

const StyledLogoContainer = styled.div`
  ${flexColumn}
  align-items: center;
  margin-bottom: 4rem;
`;

const StyledLoginPageForm = styled.form`
  ${flexColumn}
  gap: 2.4rem;
`;

export default LoginPage;
