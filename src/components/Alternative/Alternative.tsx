import IconLink from '../IconLink/IconLink';
import { StyledLogin } from './Alternative.styles';

import ICON_KAKAO from '/icon-kakao.png';
import ICON_GOOGLE from '/icon-google.png';

function Alternative() {
  return (
    <StyledLogin>
      <p>간편 로그인하기</p>
      <IconLink
        to='https://www.google.com/'
        name='google'
        src={ICON_GOOGLE}
        size='md'
      />
      <IconLink
        to='https://www.kakaocorp.com/page/'
        name='google'
        src={ICON_KAKAO}
        size='md'
      />
    </StyledLogin>
  );
}

export default Alternative;
