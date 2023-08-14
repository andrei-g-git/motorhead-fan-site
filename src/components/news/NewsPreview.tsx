type NewsPreviewProps = {
    title: string,
    subtitle: string,
    link: string,
    RedirectButton: React.FunctionComponent<any>
}

const NewsPreview = ({title, subtitle, link, RedirectButton}: NewsPreviewProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <RedirectButton link={link} />
        </div>
    )
}

export default NewsPreview;