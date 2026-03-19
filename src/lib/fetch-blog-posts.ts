const emptyBlogPostsResponse = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

export async function loadBlogPosts() {
  const user = process.env.NEXT_PUBLIC_VCMS_USER || 'SuperSuperDev';
  const host = process.env.NEXT_PUBLIC_VCMS_HOST;

  if (!host) {
    return emptyBlogPostsResponse;
  }

  try {
    const res = await fetch(
      `${host}/spa/video/?post_type=blog_post&author=${user}`
    );
    if (!res.ok) {
      return emptyBlogPostsResponse;
    }

    const data = await res.json();
    const results = Array.isArray(data?.results) ? data.results : [];

    return {
      count: typeof data?.count === 'number' ? data.count : results.length,
      next: data?.next ?? null,
      previous: data?.previous ?? null,
      results,
    };
  } catch (_error) {
    return emptyBlogPostsResponse;
  }
}

export async function loadBlogPost(id: string) {
  const host = process.env.NEXT_PUBLIC_VCMS_HOST;

  if (!host || !id) {
    return null;
  }

  try {
    const res = await fetch(`${host}/spa/video/${id}`);
    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data && typeof data === 'object' ? data : null;
  } catch (_error) {
    return null;
  }
}
