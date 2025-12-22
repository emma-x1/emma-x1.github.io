import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const modules = import.meta.glob('./*/post.md', {
        eager: true
    });

    const posts = Object.entries(modules).map(([path, module]: any) => {
        const slug = path.split('/')[1];

        return {
            slug, 
            ...module.metadata
        };
    });

    posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return { posts };
};
