import { styled } from 'styled-components';
import styles from './stylesMarvelLogo';
import { Link } from 'react-router-dom'

const LogoContainer = styled(Link)`
    ${styles.LogoContainer}
`;

const Logo = ()=>{
    return <LogoContainer to="/" />
}

export default Logo;

