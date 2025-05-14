import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BlogPostModel, BlogPostInput } from '../../types/blog';
import { blogService } from '../../services/blogService';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { toast } from 'react-hot-toast';

interface BlogPostFormProps {
  post?: BlogPostModel | null;
  onSubmit: () => void;
  onCancel: () => void;
}

export default function BlogPostForm({ post, onSubmit, onCancel }: BlogPostFormProps) {
  const [formData, setFormData] = useState<BlogPostInput>({
    slug: '',
    title: '',
    excerpt: '',
    content: '',
    cover_image: '',
    read_time: 5,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (post) {
      setFormData({
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        cover_image: post.cover_image,
        read_time: post.read_time,
      });
    }
  }, [post]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'read_time' ? parseInt(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (post) {
        await blogService.updatePost(post.slug, formData);
        toast.success('Post updated successfully');
      } else {
        await blogService.createPost(formData);
        toast.success('Post created successfully');
      }
      onSubmit();
    } catch (error) {
      toast.error(post ? 'Failed to update post' : 'Failed to create post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="bg-gray-800/50 rounded-lg p-6 space-y-6"
    >
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-violet-500 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Slug
          </label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-violet-500 text-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Cover Image URL
        </label>
        <input
          type="url"
          name="cover_image"
          value={formData.cover_image}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-violet-500 text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Excerpt
        </label>
        <textarea
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          required
          rows={2}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-violet-500 text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Content (HTML)
        </label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
          rows={10}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-violet-500 text-white font-mono"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Read Time (minutes)
        </label>
        <input
          type="number"
          name="read_time"
          value={formData.read_time}
          onChange={handleChange}
          required
          min="1"
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-violet-500 text-white"
        />
      </div>

      <div className="flex justify-end gap-4">
        <Button
          variant="outline"
          onClick={onCancel}
          type="button"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={loading}
        >
          {loading ? <LoadingSpinner /> : post ? 'Update Post' : 'Create Post'}
        </Button>
      </div>
    </motion.form>
  );
}