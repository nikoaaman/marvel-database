import Marvel from './Marvel_Logo.svg'
import { css } from 'styled-components';

const styles = {
    LogoContainer: css`
        height: 40px;
        width: 100px;
        background-image: url(${Marvel});
        display: inline-block;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        border: solid 1px white;
    `
}

export default styles;