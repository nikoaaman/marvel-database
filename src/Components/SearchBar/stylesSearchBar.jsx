import { css } from 'styled-components';

const styles = {
    SearchContainer: css`
        display: flex;
        align-items: center;
        justify-content: right; 
    `,
    Input: css`
        width: 350px;
        height: 25px;
        font-size: 1rem;
        padding: 1.2rem;
        border:none;
    `,
    Button: css`
        height: 25px;
        background-color: #EC1D24;
        color: white;
        font-weight: bold;
        font-size: 1rem;
        padding: 1.2rem;
        border: none;
    `
}

export default styles;