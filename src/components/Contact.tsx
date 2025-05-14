import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';
import LoadingSpinner from './ui/LoadingSpinner';
import { formControls, fadeInLeft } from '../utils/animations';
import { CONTACT_INFO } from '../utils/constants';
import { sendEmail, EmailData } from '../utils/email';

export default function Contact() {
  const [formData, setFormData] = useState<EmailData>({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await sendEmail(formData);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle highlight="Touch">Get In</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            {...fadeInLeft}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-violet-400" />
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-gray-400">{CONTACT_INFO.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-violet-400" />
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-gray-400">{CONTACT_INFO.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-violet-400" />
              <div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
                <p className="text-gray-400">{CONTACT_INFO.location}</p>
              </div>
            </div>
          </motion.div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.input
              {...formControls}
              transition={{ delay: 0.1 }}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-violet-500 text-white transition-colors"
            />
            <motion.input
              {...formControls}
              transition={{ delay: 0.2 }}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-violet-500 text-white transition-colors"
            />
            <motion.textarea
              {...formControls}
              transition={{ delay: 0.3 }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={4}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-violet-500 text-white transition-colors"
            />
            <motion.div
              {...formControls}
              transition={{ delay: 0.4 }}
            >
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? <LoadingSpinner /> : 'Send Message'}
              </Button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
}