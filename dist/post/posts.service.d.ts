export interface Post {
    slug: string;
}
export declare const getPosts: () => Post[];
export declare const getPostBySlug: (slug: string) => Post | undefined;
