export async function loadBlogPosts() {
  // Call an external API endpoint to get public blog posts
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_VCMS_HOST}/spa/video/?post_type=blog_post`
    );
    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
}
