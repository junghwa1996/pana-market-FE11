import { styled } from 'styled-components';
import { Container, Page } from '../../styles/Common.styles';
import IMG_HOME_TOP from '/img_home_top.png';
import IMG_HOME_BOTTOM from '/img_home_bottom.png';
import font from '../../styles/fontStyle.styles';
import { media } from '../../styles/media.styles';
import { flexColumn } from '../../styles/layout.styles';

const MainPage = styled(Page)`
  background-color: #fff;
  padding: 7rem 0 0;
  ${media.tamo`
    background-color: #fcfcfc;
  `}
`;

const MainConteiner = styled(Container)`
  display: flex;
  align-items: flex-end;
  height: 100%;
  background-image: url(${IMG_HOME_TOP});
  background-repeat: no-repeat;
  background-size: 74.6rem 34rem;
  background-position: 100% 100%;
  ${media.tamo`
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-position: center 100%;
    max-width: 100%;
  `}
  ${media.mo`
    background-size: 44.8rem 20.4rem;
  `}
`;

const Kv = styled.div`
  height: 54rem;
  background-color: #cfe5ff;
  ${media.ta`
    height: 77.1rem;
  `}
`;

const MainKvContent = styled.div`
  margin-bottom: 10rem;
  ${media.tamo`
    ${flexColumn}
    align-items: center;
    margin-bottom: 0;
  `}
  ${media.ta`
    margin-top: 8.4rem;
  `}
  ${media.mo`
    margin-top: 4.8rem;
  `}
  h2 {
    ${font('40b')}
    margin-bottom: 3.2rem;
    ${media.tamo`
    text-align: center;
    `}
    ${media.ta`
      margin-bottom: 2.4rem;
      > br{
        display: none;
      }
    `}
    ${media.mo`
      margin-bottom: 1.8rem;
      ${font('32b')}
    `}
  }
`;

const MainFeaturesContainer = styled(Container)`
  ${flexColumn}
  gap: 5.2rem;
  ${media.ta`
    margin: 2.4rem auto 5.6rem;
  `}
  ${media.mo`
    margin: 5.2rem auto 8.3rem;
    gap: 4rem;
  `}
`;

const MainBanner = styled.section`
  display: flex;
  align-items: flex-end;
  background-color: #cfe5ff;
  height: 54rem;
  ${media.ta`
    height: 92.7rem; 
  `}
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
  ${media.tamo`
    align-items: center;
    flex-direction: column;
    height: 100%;
    background-position: center 100%;
    max-width: 100%;
  `}
  ${media.mo`
    background-size: 37.5rem 19.8rem; 
  `}
  p {
    white-space: nowrap;
    ${font('40b')}
    margin-bottom: 17.25rem;
    ${media.tamo`
      text-align: center;
      margin-bottom: 0;
    `}
    ${media.ta`
      margin-top: 20.1rem; 
    `}
    ${media.mo`
      margin-top: 12.1rem; 
      ${font('32b')}
    `}
  }
`;

export {
  MainPage,
  Kv,
  MainConteiner,
  MainKvContent,
  MainFeaturesContainer,
  MainBanner,
  MainBannerContainer,
};
