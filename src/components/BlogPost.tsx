import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';

export function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/src/posts/${slug}.md`)
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(err => console.error('Error loading blog post:', err));
  }, [slug]);

  return (
    <div className="pt-20 bg-background-950 dark:bg-background-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <a 
          href="/#blog" 
          className="inline-flex items-center text-secondary-500 hover:text-secondary-400 mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Blog
        </a>
        
        <article className="prose prose-lg dark:prose-invert prose-headings:text-text-100 dark:prose-headings:text-text-900 prose-p:text-text-200 dark:prose-p:text-text-800 prose-a:text-secondary-500 hover:prose-a:text-secondary-400 prose-strong:text-text-100 dark:prose-strong:text-text-900">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}