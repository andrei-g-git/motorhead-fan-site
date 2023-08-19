//"use client"
import styled from "styled-components";
import React from "react";
import { PictureFile } from "../lib/types";

//background-image: url(${props => props.backgroundimage});

export const Main = styled.div<{backgroundimage: PictureFile}>`
    width: 100%;
    height: 100%;
    background-image: ${props => `url(${props.backgroundimage})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;
