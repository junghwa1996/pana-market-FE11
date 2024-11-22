import { styled } from 'styled-components';

import { media } from '../../styles/media.styles';

import BoardCard, { BoardCardProps } from './BoardCard';
import { Link } from 'react-router-dom';

interface BoardCardListItem extends BoardCardProps {
  id: string;
}

export interface BoardCardListProps {
  list: BoardCardListItem[];
}

function BoardCardList({ list = [] }: BoardCardListProps) {
  return (
    <BoardCardListUl>
      {list.map((item) => (
        <li key={item.id}>
          <Link to={`/board/${item.id}`}>
            <BoardCard
              title={item.title}
              likeCount={item.likeCount}
              updatedAt={item.updatedAt}
              writer={item.writer}
              image={item.image}
            />
          </Link>
        </li>
      ))}
    </BoardCardListUl>
  );
}

const BoardCardListUl = styled.ul`
  display: flex;
  gap: 2.4rem;
  width: 100%;
  height: auto;
  ${media.ta`
    gap: 1.6rem;
  `}
`;

export default BoardCardList;
