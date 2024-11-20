import ProfileImage from '../../components/ProfileImages/ProfileImage';
import Logo from '../../components/Shared/Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { HeaderContainer, StlyedContainer } from './Headers.styles';
import Button from '../../components/Button/Button';

type HeadersProps = {
  hasLogin: boolean;
};

function Headers({ hasLogin }: HeadersProps) {
  return (
    <HeaderContainer>
      <StlyedContainer>
        <Logo />
        <Navigation />
        {hasLogin ? (
          <ProfileImage />
        ) : (
          <Button href='/login' color='blue' size='medium'>
            로그인
          </Button>
        )}
      </StlyedContainer>
    </HeaderContainer>
  );
}

export default Headers;
