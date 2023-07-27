import Logo from "../Logo/MarvelLogo";
import { styled } from 'styled-components';
import styles from "./stylesHeader";
import SearchBar from "../SearchBar/SearchBar";


const HeaderContainer = styled.div`
    ${styles.HeaderContainer}
`

const Header = ()=>{
    return (
    <>
        <HeaderContainer>
            <Logo />
            <SearchBar/>
        </HeaderContainer>
    </>
)}

export default Header;