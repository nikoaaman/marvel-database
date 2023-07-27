import { styled } from 'styled-components';
import styles from './stylesSearchBar';

const SearchContainer = styled.form`
    ${styles.SearchContainer}
`;

const SearchInput = styled.input`
    ${styles.Input}
`;

const SearchButton = styled.button`
    ${styles.Button}
`;

const SearchBar = ()=>{
    return (
    <SearchContainer>
            <SearchInput type="search" placeholder="Search" />
            <SearchButton>ASSEMBLE</SearchButton>
    </SearchContainer>
    )
}

export default SearchBar;