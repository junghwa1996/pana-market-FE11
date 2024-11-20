import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ICON_FACEBOOK from '@assets/ic_facebook.png';
import ICON_INSTAGRAM from '@assets/ic_instagram.png';
import ICON_TWITTER from '@assets/ic_twitter.png';
import ICON_YOUTUBE from '@assets/ic_youtube.png';

type StyledLinkSnsProps = {
  $name: string;
};

export const StyledLinkSns = styled(Link)<StyledLinkSnsProps>`
  display: inline-block;
  font-size: 0;
  line-height: 0;
  width: 1.8rem;
  height: 1.8rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ $name }) => {
    const url = (() => {
      switch ($name) {
        case 'facebook':
          return ICON_FACEBOOK;
        case 'instagram':
          return ICON_INSTAGRAM;
        case 'twitter':
          return ICON_TWITTER;
        case 'youtube':
          return ICON_YOUTUBE;
        default:
          return null;
      }
    })();
    return url ? `url(${url})` : 'none';
  }};
`;
