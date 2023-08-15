type ArticlePreviewProps = {
    title: string,
    subtitle: string,
    link: string,
    RedirectButton: React.FunctionComponent<any>
}

const ArticlePreview = ({title, subtitle, link, RedirectButton}: ArticlePreviewProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <RedirectButton link={link} />
        </div>
    )
}

export default ArticlePreview;