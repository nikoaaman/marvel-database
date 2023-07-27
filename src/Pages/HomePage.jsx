import { styled } from 'styled-components';
import styles from './stylesPages';
import Card from '../Components/Card/Card';

const HomePageContainer = styled.div`
    ${styles.Pages}
`

const HomePage = ()=>{
    return (
    <HomePageContainer>
        <Card/>
    </HomePageContainer>
    )
}

export default HomePage;
