import { FormEvent } from 'react';
import StyledForm from './SearchInput.styles';

interface SearchInputProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  wide?: boolean;
}

const SearchInput = ({ onSubmit, wide = false }: SearchInputProps) => {
  return (
    <StyledForm onSubmit={onSubmit} $wide={wide}>
      <input
        name='search'
        placeholder='검색할 상품을 입력해주세요'
        autoComplete='off'
      />
    </StyledForm>
  );
};

export default SearchInput;
