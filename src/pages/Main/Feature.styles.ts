import styled from 'styled-components';
import font from '../../styles/fontStyle.styles';
import { flexColumn } from '../../styles/layout.styles';
import { media } from '../../styles/media.styles';

const StyledFeature = styled.section`
  padding: 13.8rem 0;
  ${flexColumn}
  align-items: center;
  ${media.tamo`
    padding: 0;
  `}

  &:last-child {
    margin-bottom: 13.8rem;
    ${media.tamo`
      margin-bottom: 0;
    `}
  }

  &:nth-child(even) {
    .feature-item {
      flex-direction: row-reverse;
      text-align: right;
      ${media.tamo`
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
      `}
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
      ${media.tamo`
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        border-radius: 0;
        gap: 2.4rem;
      `}
    }

    &-image {
      width: 57.9rem;
      height: auto;
      ${media.tamo`
        width: 100%;
        overflow: hidden;
      `}
      ${media.ta`
        border-radius: 1.42rem;
      `}
    }

    &-content {
      .tag {
        display: inline-block;
        margin-bottom: 1.2rem;
        color: var(--blue-100);
        ${font('18b')}
        ${media.ta`
          margin-bottom: 1.6rem;
        `}
        ${media.mo`
          ${font('16b')}
        `}
      }

      .title {
        margin-bottom: 2.4rem;
        ${font('40b')}
        ${media.tamo`
          > br{
            display: none;
          }
        `}
        ${media.ta`
          ${font('32b')}
        `}
        ${media.mo`
          margin-bottom: 1.6rem;
          ${font('24b')}
        `}
      }

      .desc {
        ${font('24m')}
        letter-spacing: -0.05rem;
        ${media.ta`
          ${font('18m')}
        `}
        ${media.mo`
          ${font('16m')}
        `}
      }
    }
  }
`;

export { StyledFeature };
