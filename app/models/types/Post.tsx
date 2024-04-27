export type Post = {
  id?: string;
  status: string;
  summary: string;
  coverImage: {
    src: string,
    alt: string,
  };
  title: string;
  body: string;
  tags: Array<string>;
  createdAt: Number;
  updatedAt: Number;
  publishedAt: Number;
};
