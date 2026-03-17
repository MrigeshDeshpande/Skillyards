export const POSTS_QUERY = `
*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  publishedAt,
  author
}
`;