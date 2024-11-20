import { StyledFeature } from './Feature.styles';

type TextPair = {
  first: string;
  secound: string;
};

interface FeatureProps {
  tag: string;
  title: TextPair;
  desc: TextPair;
  images: {
    pc: string;
    ta: string;
  };
}

function Feature({
  tag = 'tag name',
  title = {
    first: '첫번째 줄',
    secound: '두번째 줄',
  },
  desc = {
    first: '첫번째 줄',
    secound: '두번째 줄',
  },
  images = {
    pc: '',
    ta: '',
  },
}: FeatureProps) {
  return (
    <StyledFeature>
      <div className='feature-item'>
        <div className='feature-image'>
          <picture>
            <source srcSet={images.ta} media='(max-width: 1199px)' />
            <source srcSet='' media='(max-width: 768px)' />
            <img src={images.pc} alt={`${tag} 이미지`} />
          </picture>
        </div>
        <div className='feature-content'>
          <span className='tag'>{tag}</span>
          <h3 className='title'>
            {title.first} <br />
            {title.secound}
          </h3>
          <p className='desc'>
            {desc.first} <br />
            {desc.secound}
          </p>
        </div>
      </div>
    </StyledFeature>
  );
}

export default Feature;
