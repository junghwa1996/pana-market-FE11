import { FooterContainer, FooterItem, StyledFooter } from './Footer.styles';
import { Link } from 'react-router-dom';

import ICON_FACEBOOK from '/ic_facebook.png';
import ICON_INSTAGRAM from '/ic_instagram.png';
import ICON_TWITTER from '/ic_twitter.png';
import ICON_YOUTUBE from '/ic_youtube.png';
import IconLink from '../../components/IconLink/IconLink';

const snsLink = [
  {
    id: 1,
    name: 'facebook',
    to: 'https://www.facebook.com/',
    src: ICON_FACEBOOK,
  },
  { id: 2, name: 'twitter', to: 'https://x.com/', src: ICON_TWITTER },
  { id: 3, name: 'youtube', to: 'https://www.youtube.com/', src: ICON_YOUTUBE },
  {
    id: 4,
    name: 'instagram',
    to: 'https://www.instagram.com/',
    src: ICON_INSTAGRAM,
  },
];

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterItem className='text-copyright'>
          <p>©codeit - 2024</p>
        </FooterItem>
        <FooterItem className='link-page'>
          <Link to='/privacy'>Privacy Policy</Link>
          <Link to='/faq'>FAQ</Link>
        </FooterItem>
        <FooterItem className='link-sns'>
          {snsLink.map((sns) => (
            <IconLink key={sns.id} to={sns.to} name={sns.name} src={sns.src} />
          ))}
        </FooterItem>
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;
