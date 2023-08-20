import React from 'react'
import ArticlePreview from "@/components/news/ArticlePreview";
import ReadMore from "@/components/ReadMore";
import {withLink} from "@/components/higher-order/navigation";

const ArticlePreviews = ({
    metadata
}:{
    metadata: {
        slug: string,
        title: string,
        subtitle: string    
    }[]
}) => {
    return (
        <div style={{backgroundColor: "lightgreen"}}>
            {
                metadata.map(item => 
                    <ArticlePreview 
                        title={item.title}
                        subtitle={item.subtitle}
                        link={`/${item.slug}`}
                        RedirectButton={withLink(ReadMore)}
                    />
                )
            }
        </div>
    )
}

export default ArticlePreviews;