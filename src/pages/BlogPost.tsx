import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { BlogPostModel } from '../types/blog';
import { blogService } from '../services/blogService';
import { fadeInUp } from '../utils/animations';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { toast } from 'react-hot-toast';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        const data = await blogService.getPostBySlug(slug);
        setPost(data);
      } catch (error) {
        toast.error('Failed to load blog post');
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-2xl font-bold text-white">Post not found</h1>
        <Link to="/blog" className="text-violet-400 hover:text-violet-300">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="py-20">
      <div className="container mx-auto px-6">
        <Link
          to="/blog"
          className="inline-flex items-center text-violet-400 hover:text-violet-300 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Blog
        </Link>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="max-w-3xl mx-auto"
        >
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {new Date(post.created_at).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              {post.read_time} min read
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>
          <div 
            className="prose prose-invert prose-violet max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </div>
    </article>
  );
}