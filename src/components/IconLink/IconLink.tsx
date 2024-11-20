import { StyledIconLink } from './IconLink.styles';

interface IconLinkProps {
  to: string;
  name: string;
  src: string;
  size?: 'sm' | 'md';
}

function IconLink({
  to = '',
  name = 'facebook',
  src = '',
  size = 'sm',
}: IconLinkProps) {
  return (
    <StyledIconLink to={to} target='_blank' $size={size}>
      <img src={src} alt={`${name} 아이콘`} />
    </StyledIconLink>
  );
}

export default IconLink;
