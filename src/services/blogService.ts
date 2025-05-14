import { supabase } from '../lib/supabase';
import { BlogPostModel, BlogPostInput } from '../types/blog';

export const blogService = {
  async getAllPosts(): Promise<BlogPostModel[]> {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async getPostBySlug(slug: string): Promise<BlogPostModel | null> {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) throw error;
    return data;
  },

  async createPost(post: BlogPostInput): Promise<BlogPostModel> {
    // const { data: { user } } = await supabase.auth.getUser();
    // if (!user) throw new Error('User not authenticated');
    // if (false) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('blog_posts')
      .insert([{ ...post, author_id: "4933e02f-31d3-4597-a74b-537130fb69aa" }])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updatePost(slug: string, post: Partial<BlogPostInput>): Promise<BlogPostModel> {
    const { data, error } = await supabase
      .from('blog_posts')
      .update({ ...post, updated_at: new Date().toISOString() })
      .eq('slug', slug)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deletePost(slug: string): Promise<void> {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('slug', slug);

    if (error) throw error;
  },
};