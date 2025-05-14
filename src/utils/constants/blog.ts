export const BLOG_POSTS = [
  {
    slug: 'getting-started-with-react',
    title: 'Getting Started with React: A Beginner\'s Guide',
    excerpt: 'Learn the fundamentals of React and start building modern web applications.',
    date: 'March 15, 2024',
    readTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
    content: `
      <h2>Introduction to React</h2>
      <p>React is a JavaScript library for building user interfaces. It lets you create reusable UI components that manage their own state.</p>
      
      <h3>Why React?</h3>
      <ul>
        <li>Component-Based Architecture</li>
        <li>Virtual DOM for Better Performance</li>
        <li>Rich Ecosystem and Community</li>
      </ul>

      <h3>Setting Up Your First React Project</h3>
      <p>You can quickly create a new React project using Vite:</p>
      <pre><code>npm create vite@latest my-react-app -- --template react-ts</code></pre>
    `
  },
  {
    slug: 'mastering-typescript',
    title: 'Mastering TypeScript for Better Code Quality',
    excerpt: 'Discover how TypeScript can improve your JavaScript development experience.',
    date: 'March 10, 2024',
    readTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2728&auto=format&fit=crop',
    content: `
      <h2>Why TypeScript?</h2>
      <p>TypeScript adds static typing to JavaScript, helping catch errors early in development.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li>Better IDE Support</li>
        <li>Early Error Detection</li>
        <li>Improved Code Maintainability</li>
      </ul>

      <h3>Basic Types</h3>
      <pre><code>
let name: string = 'John';
let age: number = 30;
let isActive: boolean = true;
      </code></pre>
    `
  },
  {
    slug: 'tailwind-css-tips',
    title: 'Essential Tailwind CSS Tips and Tricks',
    excerpt: 'Learn how to make the most of Tailwind CSS in your projects.',
    date: 'March 5, 2024',
    readTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop',
    content: `
      <h2>Getting Started with Tailwind</h2>
      <p>Tailwind CSS is a utility-first CSS framework that lets you build custom designs without leaving your HTML.</p>

      <h3>Key Concepts</h3>
      <ul>
        <li>Utility-First Approach</li>
        <li>Responsive Design</li>
        <li>Component Extraction</li>
      </ul>

      <h3>Responsive Design</h3>
      <pre><code>
<div class="md:flex bg-white rounded-lg p-6">
  <img class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="avatar.jpg">
  <div class="text-center md:text-left">
    <h2 class="text-lg">John Doe</h2>
    <div class="text-gray-600">Developer</div>
  </div>
</div>
      </code></pre>
    `
  }
];