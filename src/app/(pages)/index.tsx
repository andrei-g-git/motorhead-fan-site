import React from 'react'
import fs from "fs";
import Link from 'next/link';
import { NewsPreview, ReadMore, withLink } from '@/components';
import { getArticleMetadata } from '../lib';
import path from 'path';
import ToursPreview from '@/components/tours/ToursPreview';

const Homeee = (/* {slugs}: {slugs: string[]} */) => {
    const slugs = getNewsMetadata();
    const allMetadata = slugs.map(slug => {
        const data = getArticleMetadata("content/news", slug);
        return {
            slug: slug,
            //{...data}   why doesn't this work?
            title: data.title,
            subtitle: data.subtitle
        }
    });

    const toursRaw = fs.readFileSync(path.join("content/tours", "tours.json"), "utf8")
    const tours = JSON.parse(toursRaw)

    return (
        <div>
            "homeeeeee"
            {
                allMetadata.map(item =>

                    <NewsPreview title={item.title}
                        subtitle={item.subtitle}
                        link={`/news/${item.slug}`}
                        RedirectButton={withLink(ReadMore)}
                    />
                )
            }

            <ToursPreview tours={tours} />
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