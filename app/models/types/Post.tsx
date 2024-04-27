export type Post = {
  id?: string;
  status: string;
  title: string;
  body: string;
  tags: Array<string>;
  createdAt: Number;
  updatedAt: Number;
  publishedAt: Number;
};
