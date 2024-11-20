import { styled } from 'styled-components';
import { Container, Page } from '../../styles/Common.styles';
import IMG_HOME_TOP from '../../../dist/Img_home_top.png';
import IMG_HOME_BOTTOM from '../../../dist/Img_home_bottom.png';
import font from '../../styles/fontStyle.styles';

const MainPage = styled(Page)`
  background-color: #fff;
  padding-bottom: 0;
`;

const MainConteiner = styled(Container)`
  display: flex;
  align-items: flex-end;
  height: 100%;
  background-image: url(${IMG_HOME_TOP});
  background-repeat: no-repeat;
  background-size: 74.6rem 34rem;
  background-position: 100% 100%;
`;

const Kv = styled.div`
  height: 54rem;
  background-color: #cfe5ff;
`;

const MainKvContent = styled.div`
  margin-bottom: 10rem;
  h2 {
    ${font('40b')}
    margin-bottom: 3.2rem;
  }
`;

const MainBanner = styled.section`
  display: flex;
  align-items: flex-end;
  background-color: #cfe5ff;
  height: 54rem;
`;

const MainBannerContainer = styled(Container)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  background-image: url(${IMG_HOME_BOTTOM});
  background-repeat: no-repeat;
  background-size: 74.6rem 39.7rem;
  background-position: 100% 100%;
  p {
    white-space: nowrap;
    ${font('40b')}
    margin-bottom: 17.25rem;
  }
`;

export {
  MainPage,
  Kv,
  MainConteiner,
  MainKvContent,
  MainBanner,
  MainBannerContainer,
};
