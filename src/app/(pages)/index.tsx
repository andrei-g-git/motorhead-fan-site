//"use client"

import React from 'react'
import fs from "fs";
import Link from 'next/link';
import { ArticlePreview, ReadMore, withLink/* , withParallax */ } from '@/components';
import { getArticleMetadata } from '../lib';
import path from 'path';
import ToursPreview from '@/components/tours/ToursPreview';
import * as Styled from "./styles";
import LandingParallaxBg from '@/components/landing/LandingParallaxBg';


import TestLanding from '@/components/landing/TestLanding';



const Homeee = (/* {slugs}: {slugs: string[]} */) => {
    let slugs = getNewsMetadata();
    const allArticleMetadata = slugs.map(slug => {
        const data = getArticleMetadata("content/news", slug);
        return {
            slug: slug,
            //{...data}   why doesn't this work?
            title: data.title,
            subtitle: data.subtitle
        }
    });

    slugs = getInterviewSlugs();
    const allInterviewMetadata = slugs.map(slug => {
        const data = getArticleMetadata("content/interviews", slug);
        return {
            slug: slug,
            title: data.title,
            subtitle: data.subtitle
        }
    });

    const toursRaw = fs.readFileSync(path.join("content/tours", "tours.json"), "utf8")
    const tours = JSON.parse(toursRaw)

    //const Landing = withSParallax(LandingView);

    return (
        <div> 
            <LandingParallaxBg />
            
            <div style={{
                width: "100%",
                height: "1600px",
                backgroundColor: "green"
            }}>

            </div>
        </div>

    )
}

export const getNewsMetadata = () => {
    const files = fs.readdirSync("content/news");
    return files.map(fileName => fileName.replace(".md", ""))
    // return{
    //     props: {
    //         slugs: files.map(fileName => fileName.replace(".md", ""))
    //     }
    // }
}

export const getInterviewSlugs = () => {
    const files = fs.readdirSync("content/interviews");
    return files.map(fileName => fileName.replace(".md", ""))
}

// const getContentMetadata = () => {
//     const files = fs.readdirSync("content/news");
//     const fileNames = files.filter(file => file.endsWith(".md"));
//     const slugs = fileNames.map(file => file.replace("md", ""));
//     return slugs;
// }

// export const getStaticPaths = async () => {
//     const files = fs.readdirSync("content/news");

//     return{
//         paths: [],
//         fallback: false
//     }
// }

export default Homeee;








