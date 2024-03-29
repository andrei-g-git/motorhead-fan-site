//"use client"

import React from 'react'
import fs from "fs";
import { getArticleMetadata } from '../lib';
import path from 'path';
import TourPreviews from '@/components/landing/TourPreviews';
import LandingParallaxBg from '@/components/landing/LandingParallaxBg';
import BandFixedBg from '@/components/landing/BandFixedBg';
import ArticlePreviews from '@/components/landing/ArticlePreviews';

const Homeee = ({
    //LandingParallaxBg
    // BandFixedBg,
    //     ArticlePreviews,
    //     TourPreviews,
}: {
    //LandingParallaxBg: React.FunctionComponent<{layer: number}>
    // BandFixedBg: React.FunctionComponent<any>,
    // ArticlePreviews: React.FunctionComponent<any>,
    // TourPreviews: React.FunctionComponent<any>,
}) => {
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
        <div style={{
            position: "relative",
            height: 4000
        }}> 
            <LandingParallaxBg layer={1}/>
            
            <ArticlePreviews metadata={allArticleMetadata}/>

            <BandFixedBg backgroundimage="/images/home-parallax-image-1.jpg"/>

            <TourPreviews tours={tours} />

            <BandFixedBg backgroundimage="/images/home-parallax-image-2.jpg"/>

            <ArticlePreviews metadata={allInterviewMetadata}/>
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








