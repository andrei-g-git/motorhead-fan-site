import {
    grabStaticPaths,
    grabStaticProps
} from "~/lib";

import { Params } from "@/app/lib/types";

import React from 'react'
import fs from "fs"
import path from "path";

//const Article = ({contents}: {contents: any}) => {
const Article = (props: any) => {

  return (
    <div>the slug is:  {props.contents}</div>
  )
}




export const getStaticPaths = async () => {
    const files = fs.readdirSync("content/news");
    const fileNames = files.filter(file => file.endsWith(".md"));
    const slugs = fileNames.map(fileName => fileName.replace(".md", ""));
    return {
        paths: slugs.map(slug => {
            return {params: {slug: slug}}
        }),
        fallback: false
    }
}

export const getStaticProps = async ({params: {slug}}: Params) => {
    const contents = fs.readFileSync(path.join("/content/news", slug + ".md"));

    return{
        props: {
            contents
        }
    }
}




// export const getStaticPaths = async () => {
//     return grabStaticPaths("content/news");
// }

// export const getStaticProps = async ({params: {slug}}: Params) => {
//     return grabStaticProps("content/news", {params: {slug}});
// }


export default Article;