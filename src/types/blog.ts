export interface BlogPostModel {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string;
  read_time: number;
  created_at: string;
  updated_at: string;
  author_id: string;
}

export interface BlogPostInput {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string;
  read_time: number;
}