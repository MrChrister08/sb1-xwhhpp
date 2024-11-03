import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, Users } from 'lucide-react';

interface Profile {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  followers: number;
}

interface TrendingTopic {
  id: string;
  name: string;
  posts: number;
}

const MOCK_PROFILES: Profile[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    username: 'sarahj',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    bio: 'Digital artist & creative coder | Creating beautiful things with code',
    followers: 12400,
  },
  {
    id: '2',
    name: 'Alex Chen',
    username: 'alexc',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    bio: 'Photography enthusiast | Capturing moments one click at a time 📸',
    followers: 8900,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    username: 'emilyr',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    bio: 'Tech blogger | Sharing insights about the latest in technology',
    followers: 15600,
  },
];

const TRENDING_TOPICS: TrendingTopic[] = [
  { id: '1', name: '#WebDev', posts: 12500 },
  { id: '2', name: '#Photography', posts: 8900 },
  { id: '3', name: '#ArtificialIntelligence', posts: 7600 },
  { id: '4', name: '#Innovation', posts: 6200 },
  { id: '5', name: '#Technology', posts: 5800 },
];

export function Discover() {
  const [searchQuery, setSearchQuery] = useState('');
  const [profiles] = useState<Profile[]>(MOCK_PROFILES);
  const [trendingTopics] = useState<TrendingTopic[]>(TRENDING_TOPICS);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search people and topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Users className="h-6 w-6 text-indigo-600" />
              <h2 className="text-2xl font-bold">Suggested Profiles</h2>
            </div>
            <div className="space-y-6">
              {profiles.map((profile) => (
                <div
                  key={profile.id}
                  className="flex items-start justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{profile.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">@{profile.username}</p>
                      <p className="mt-1 text-sm">{profile.bio}</p>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {profile.followers.toLocaleString()} followers
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`/profile/${profile.username}`}
                    className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    View Profile
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="h-6 w-6 text-indigo-600" />
              <h2 className="text-2xl font-bold">Trending Topics</h2>
            </div>
            <div className="space-y-4">
              {trendingTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
                >
                  <span className="font-medium">{topic.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {topic.posts.toLocaleString()} posts
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}