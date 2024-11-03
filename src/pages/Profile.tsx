import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Link as LinkIcon, Calendar, MessageCircle, Heart, Share2 } from 'lucide-react';
import { format } from 'date-fns';

interface UserProfile {
  username: string;
  name: string;
  avatar: string;
  banner: string;
  bio: string;
  location: string;
  website: string;
  joinDate: string;
  following: number;
  followers: number;
  posts: Post[];
}

interface Post {
  id: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
}

const MOCK_PROFILE: UserProfile = {
  username: 'sarahj',
  name: 'Sarah Johnson',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  banner: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200',
  bio: 'Digital artist & creative coder | Creating beautiful things with code ✨\nTeaching others about web development 👩‍💻',
  location: 'San Francisco, CA',
  website: 'sarah.dev',
  joinDate: '2023-01-15',
  following: 892,
  followers: 12400,
  posts: [
    {
      id: '1',
      content: 'Just launched my new portfolio website! Check it out and let me know what you think 🚀 #webdev #portfolio',
      timestamp: '2024-02-28T10:00:00Z',
      likes: 142,
      comments: 23,
      shares: 12,
    },
    {
      id: '2',
      content: 'Working on a new tutorial series about React and TypeScript. Stay tuned! 📚 #react #typescript',
      timestamp: '2024-02-27T15:30:00Z',
      likes: 98,
      comments: 15,
      shares: 8,
    },
  ],
};

export function Profile() {
  useParams<{ username: string; }>();
  const [profile] = useState<UserProfile>(MOCK_PROFILE);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img
            src={profile.banner}
            alt="Profile banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-6 pb-6">
          <div className="relative flex justify-between items-start">
            <div className="flex-1">
              <div className="relative -mt-16 mb-4">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 object-cover"
                />
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl font-bold">{profile.name}</h1>
                <p className="text-gray-500">@{profile.username}</p>
              </div>
            </div>
            <div className="pt-4">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors">
                Follow
              </button>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <p className="whitespace-pre-line">{profile.bio}</p>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              {profile.location && (
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
              )}
              {profile.website && (
                <div className="flex items-center space-x-1">
                  <LinkIcon className="w-4 h-4" />
                  <a
                    href={`https://${profile.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    {profile.website}
                  </a>
                </div>
              )}
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Joined {format(new Date(profile.joinDate), 'MMMM yyyy')}</span>
              </div>
            </div>

            <div className="flex space-x-6">
              <div>
                <span className="font-bold">{profile.following.toLocaleString()}</span>{' '}
                <span className="text-gray-500">Following</span>
              </div>
              <div>
                <span className="font-bold">{profile.followers.toLocaleString()}</span>{' '}
                <span className="text-gray-500">Followers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {profile.posts.map((post) => (
          <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <p className="text-lg mb-4">{post.content}</p>
            <div className="flex items-center justify-between text-gray-500 text-sm">
              <div className="flex items-center space-x-6">
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
              <time dateTime={post.timestamp} className="text-gray-500">
                {format(new Date(post.timestamp), 'MMM d, yyyy')}
              </time>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}