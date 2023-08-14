import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { ContentPath } from "./types";

export const getMarkdownData = (directory: ContentPath, slug: string) => {
    const raw = fs.readFileSync(path.join(directory, slug + ".md")).toString();
    const data = matter(raw);  
    return data;  
}

export const getArticleMetadata = (directory: ContentPath, slug: string) => {
    const grayMatter = getMarkdownData(directory, slug);
    return{
        title: grayMatter.data.title,
        subtitle: grayMatter.data.subtitle
    }
}

export const getArticleContent = (directory: ContentPath, slug: string) => {
    const grayMatter = getMarkdownData(directory, slug);
    return grayMatter.content;
}