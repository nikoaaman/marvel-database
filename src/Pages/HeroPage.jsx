import { styled } from 'styled-components';
import styles from './stylesPages';

const HeroPageContainer = styled.div`
    ${styles.Pages}
`

const HeroPage = ()=>{
    return <HeroPageContainer/>
}

export default HeroPage;

