import { useEffect, useState } from "react";

export function useFetch(url) {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  async function getPosts() {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setPost(json);
    setLoading(false);
  }

  useEffect(() => {
    getPosts();
  }, [url]);

  useEffect(() => {
    const interval = setInterval(getPosts, 10 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    post,
    loading,
  };
}
