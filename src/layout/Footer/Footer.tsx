import { FooterContainer, FooterItem, StyledFooter } from './Footer.styles';
import { Link } from 'react-router-dom';
import LinkSns from './LinkSns';

const snsLink = [
  { id: 1, name: 'facebook', to: 'https://www.facebook.com/' },
  { id: 2, name: 'twitter', to: 'https://x.com/' },
  { id: 3, name: 'youtube', to: 'https://www.youtube.com/' },
  { id: 4, name: 'instagram', to: 'https://www.instagram.com/' },
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
            <LinkSns key={sns.id} to={sns.to} name={sns.name} />
          ))}
        </FooterItem>
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;
