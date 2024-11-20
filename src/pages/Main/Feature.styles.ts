import styled from 'styled-components';
import font from '../../styles/fontStyle.styles';
import { flexColumn } from '../../styles/layout.styles';

const StyledFeature = styled.section`
  padding: 13.8rem 0;
  ${flexColumn}
  align-items: center;
  &:last-child {
    margin-bottom: 13.8rem;
  }

  &:nth-child(even) {
    .feature-item {
      flex-direction: row-reverse;
      text-align: right;
    }
  }

  .feature {
    &-item {
      display: flex;
      align-items: center;
      gap: 5rem;
      width: 98.8rem;
      border-radius: 1.2rem;
      overflow: hidden;
      background-color: #fcfcfc;
    }

    &-image {
      width: 57.9rem;
      height: auto;
    }

    &-content {
      .tag {
        display: inline-block;
        margin-bottom: 1.2rem;
        color: var(--blue-100);
        ${font('18b')}
      }

      .title {
        margin-bottom: 2.4rem;
        ${font('40b')}
      }

      .desc {
        ${font('24m')}
        letter-spacing: -0.05rem;
      }
    }
  }
`;

export { StyledFeature };
