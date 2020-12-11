import React from "react";

export type ArticleT = {
  title: string;
  author: string;
  posted: number;
};

type ResponseT = {
  posts: ArticleT[];
};

const useArticles = () => {
  const [articles, setArticles] = React.useState<ArticleT[]>([]);
  const isMounted = React.useRef(true);

  const fetchData = async () => {
    if (isMounted.current) {
      try {
        const res = await fetch(
          "https://1b-public.s3-us-west-1.amazonaws.com/blog-posts.json"
        );
        const response = res.json() as Promise<ResponseT>;
        const posts = (await response).posts;
        if (isMounted.current) {
          setArticles(posts);
        }
      } catch (e) {
        throw new Error(e.message);
      }
    }
  };

  React.useEffect(() => {
    fetchData();
    return () => {
      isMounted.current = false;
    };
  }, []);

  return articles;
};

export default useArticles;
