import React from 'react'
import fs from "fs";
import Link from 'next/link';

const Homeee = (/* {slugs}: {slugs: string[]} */) => {
    const contentMetadata = getNewsMetadata();
    console.log("logging")
    console.log("content metadata:", contentMetadata)
    return (
        <div>
            "homeeeeee"
            {
                contentMetadata.map(slug =>
                    <Link href={`/news/${slug}`}>
                        <div>{slug}</div>
                    </Link> 
                )
            }
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