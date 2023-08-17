import Link from "next/link"

export const withLink = (WrappedComponent: React.FunctionComponent<any>) => 
    (props: any) => {

        return(
            <Link href={props.link}>
                <WrappedComponent {...props} />
            </Link>
        )
    }

