import { PictureFile } from "@/app/lib/types";
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
`;

export const FixedAttatchedBackground = styled.div<{backgroundimage: PictureFile}>`
    width: "100vw";
    height: "70vh";
    background-image: ${props => `url(${props.backgroundimage})`};;
    background-size: "cover";
    background-position: "center";
    background-attachment: "fixed";
    top: 0; 
    right: 0; 
    bottom: 0;
    left: 0;
`;