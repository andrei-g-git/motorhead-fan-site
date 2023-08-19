import styled, {css} from "styled-components";

const createMediaQueries = () => {
    let styles = ``;
    for(let i = 0; i <= 15; i++){
        styles+= `
            @media (min-width: ${200 + 50 * i}px){
                height: ${100 + 10 * i}vh
            }
        `
    }

    return css`${styles}`;
}

export const Main = styled.div`
    width: 100%;
    height: 300vh;
    overflow: hidden;
    position: relative;

    ${createMediaQueries()}

`