import fs from "fs";
import {PagePath, Params} from "@/app/lib/types";
import path from "path";

export const grabStaticPaths = /* async */ (relativePath: PagePath) => {
    const files = fs.readdirSync(relativePath);
    const fileNames = files.filter(file => file.endsWith(".md"));
    const slugs = fileNames.map(fileName => fileName.replace(".md", ""));
    return {
        slugs,
        fallback: false
    }
}

export const grabStaticProps = /* async */ (relativePath: PagePath, {params: {slug}}: Params) => {
    const contents = fs.readFileSync(path.join(relativePath, slug + ".md"));
    return{
        props: {
            contents
        }
    }
}