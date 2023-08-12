import React from 'react'
import fs from "fs";

const Home = () => {
    const contentMetadata = getContentMetadata();
    
    return (
        <div>
            {
                contentMetadata.map(slug =>
                    <div>
                        {slug}
                    </div>    
                )
            }
        </div>
    )
}

const getContentMetadata = () => {
    const files = fs.readdirSync("content/news");
    const fileNames = files.filter(file => file.endsWith(".md"));
    const slugs = fileNames.map(file => file.replace("md", ""));
    return slugs;
}

// export const getStaticPaths = async () => {
//     const files = fs.readdirSync("content/news");

//     return{
//         paths: [],
//         fallback: false
//     }
// }

export default Home;