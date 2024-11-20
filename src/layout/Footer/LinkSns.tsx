import { StyledLinkSns } from './LinkSns.styles';

interface LinkSnsProps {
  to: string;
  name: string;
}

function LinkSns({ to = '', name = 'facebook' }: LinkSnsProps) {
  return (
    <StyledLinkSns to={to} target='_blank' $name={name}>
      {name}
    </StyledLinkSns>
  );
}

export default LinkSns;
