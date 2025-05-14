import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AdminBlog from './pages/AdminBlog';
import Background from './components/Background';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-transparent text-white">
        <Toaster position="top-right" />
        <Background />
        <div className="relative">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/admin/blog" element={<AdminBlog />} />
            </Routes>
          </main>
          <footer className="py-6 text-center text-gray-400 border-t border-gray-800">
            <p>© 2025 Jihad Mahfouz. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </Router>
  );
}