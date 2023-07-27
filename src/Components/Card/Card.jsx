import styled from 'styled-components';
import getCharacters from '../Hash/Hash';
import styles from './stylesCard';

const CardContainer = styled.div`
    ${styles.CardContainer}
` 

const Card=()=>{
    const characterList=getCharacters()
    console.log(characterList)
    return(
        <>
            <CardContainer>
                <h2>Hero Name</h2>
                <img src="" alt="" />
            </CardContainer>
        </>
    )
}

export default Card;