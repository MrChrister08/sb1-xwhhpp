import { useState } from 'react';
import { MessageCircle, Heart, Share2 } from 'lucide-react';

interface Post {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
}

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    author: {
      name: 'Sarah Johnson',
      username: 'sarahj',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    content: 'Just launched my new portfolio website! Check it out and let me know what you think 🚀 #webdev #portfolio',
    timestamp: '2024-02-28T10:00:00Z',
    likes: 142,
    comments: 23,
    shares: 12,
  },
  {
    id: '2',
    author: {
      name: 'Alex Chen',
      username: 'alexc',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    },
    content: 'Beautiful sunset at the beach today! Nature never fails to amaze me 🌅 #nature #photography',
    timestamp: '2024-02-28T09:30:00Z',
    likes: 256,
    comments: 18,
    shares: 45,
  },
];

export function Home() {
  const [posts] = useState<Post[]>(MOCK_POSTS);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{post.author.name}</h3>
                <p className="text-sm text-gray-500">@{post.author.username}</p>
              </div>
            </div>
            <p className="text-lg mb-4">{post.content}</p>
            <div className="flex items-center space-x-6 text-gray-500">
              <button className="flex items-center space-x-2 hover:text-red-500">
                <Heart className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-blue-500">
                <MessageCircle className="w-5 h-5" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-green-500">
                <Share2 className="w-5 h-5" />
                <span>{post.shares}</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}