import { error } from '@sveltejs/kit'

export const prerender = true;

export const entries: EntryGenerator = async () => {
    const posts = import.meta.glob('../../../posts/*.md');
  
    return Object.keys(posts).map((path) => ({
      slug: path.split('/').pop()?.replace('.md', '')
    }));
  };  

export async function load({ params }){
    try {
        const post = await import (`../../../posts/${params.slug}.md`)

        return {
            content: post.default,
            meta: post.metadata
        }
    } catch (e) {
        error(404, `Could not find ${params.slug}`)
    }
}