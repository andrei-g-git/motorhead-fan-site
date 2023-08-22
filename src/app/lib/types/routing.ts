export type ContentPath = "content/news" | "content/album" | "content/interviews";

export type Params = {
    params: {
        slug: string
    }
}

export type RoutePath = `/${string}`;

export type RouteName = "home" | "news" | "interviews" | "tours" | "about" | "contact";

export type RouteMeta = {
    name: RouteName,
    link: RoutePath
}