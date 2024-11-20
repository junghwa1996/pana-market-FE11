import { useLocation } from 'react-router-dom';

import useDeviceType from '../../utils/deviceType';
import { HeaderContainer, StlyedContainer } from './Headers.styles';

import ProfileImage from '../../components/ProfileImages/ProfileImage';
import Logo from '../../components/Shared/Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Button from '../../components/Button/Button';
import { useAuth } from '../../context/AuthContext';

function Headers() {
  const location = useLocation();
  const deviceType = useDeviceType();
  const { hasLogin } = useAuth();

  return (
    <HeaderContainer>
      <StlyedContainer>
        <Logo size='sm' />
        {location.pathname !== '/' && <Navigation />}
        {hasLogin ? (
          <>
            <ProfileImage />
          </>
        ) : (
          <Button
            href='/login'
            color='blue'
            size={deviceType === 'mo' ? 'small' : 'medium'}>
            로그인
          </Button>
        )}
      </StlyedContainer>
    </HeaderContainer>
  );
}

export default Headers;
