export async function loadBlogPosts() {
  const user = process.env.NEXT_PUBLIC_VCMS_USER || 'SuperSuperDev';
  // Call an external API endpoint to get public blog posts
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_VCMS_HOST}/spa/video/?post_type=blog_post&author=${user}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}
export async function loadBlogPost(id: string) {
  // Call an external API endpoint to get public blog posts
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_VCMS_HOST}/spa/video/${id}`
    );
    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
}
