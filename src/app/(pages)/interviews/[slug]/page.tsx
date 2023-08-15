import { getArticleContent } from "@/app/lib";
import fs from "fs";

const Article = ({params: {slug}}: {params: {slug: string}}) => {

    const content = getArticleContent("content/interviews", slug);

    return (
        <div>{content}</div>
    )
}

export const generateStaticParams = () => {
    const files = fs.readdirSync("content/interviews");
    const fileNames = files.filter(file => file.endsWith(".md"));
    const slugs = fileNames.map(fileName => fileName.replace(".md", ""));    
    return slugs.map(slug => ({ //seems I can simplify this...
        slug: slug
    }))
}

export default Article