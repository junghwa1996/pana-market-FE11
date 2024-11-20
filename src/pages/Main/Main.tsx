import Button from '../../components/Button/Button';
import Feature from './Feature';
import {
  Kv,
  MainBanner,
  MainBannerContainer,
  MainConteiner,
  MainFeaturesContainer,
  MainKvContent,
  MainPage,
} from './Main.stlyes';

import IMG_HOME_01 from '../../../dist/Img_home_01.png';
import IMG_HOME_01_TA from '../../../dist/Img_home_01_ta.png';
import IMG_HOME_02 from '../../../dist/Img_home_02.png';
import IMG_HOME_02_TA from '../../../dist/Img_home_02_ta.png';
import IMG_HOME_03 from '../../../dist/Img_home_03.png';
import IMG_HOME_03_TA from '../../../dist/Img_home_03_ta.png';
import Footer from '../../layout/Footer/Footer';

const features = [
  {
    images: { pc: `${IMG_HOME_01}`, ta: `${IMG_HOME_01_TA}` },
    tag: 'Hot item',
    title: { first: '인기 상품을', secound: '확인해 보세요' },
    desc: {
      first: '가장 HOT한 중고거래 물품을',
      secound: '판다 마켓에서 확인해 보세요',
    },
  },
  {
    images: { pc: `${IMG_HOME_02}`, ta: `${IMG_HOME_02_TA}` },
    tag: 'Search',
    title: { first: '구매를 원하는', secound: '상품을 검색하세요' },
    desc: {
      first: '구매하고 싶은 물품은 검색해서',
      secound: '쉽게 찾아보세요',
    },
  },
  {
    images: { pc: `${IMG_HOME_03}`, ta: `${IMG_HOME_03_TA}` },
    tag: 'Register',
    title: { first: '판매를 원하는', secound: '상품을 등록하세요' },
    desc: {
      first: '어떤 물건이든 판매하고 싶은 상품을',
      secound: '쉽게 등록하세요',
    },
  },
];

function Main() {
  return (
    <>
      <MainPage>
        <Kv>
          <MainConteiner>
            <MainKvContent>
              <h2>
                일상의 모든 물건을 <br />
                거래해 보세요
              </h2>
              <Button href='/items' color='blue' size='large' round>
                구경하러 가기
              </Button>
            </MainKvContent>
          </MainConteiner>
        </Kv>
        <MainFeaturesContainer>
          {features.map((feature) => (
            <Feature
              key={feature.tag}
              images={feature.images}
              tag={feature.tag}
              title={feature.title}
              desc={feature.desc}
            />
          ))}
        </MainFeaturesContainer>
        <MainBanner>
          <MainBannerContainer>
            <p>
              믿을 수 있는 <br />
              판다마켓 중고 거래
            </p>
          </MainBannerContainer>
        </MainBanner>
        <Footer />
      </MainPage>
    </>
  );
}

export default Main;
