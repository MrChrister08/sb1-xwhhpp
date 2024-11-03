import { useState } from 'react';
import { Users, MessageSquare } from 'lucide-react';
import { LiveStream } from '../components/LiveStream';
import { LiveChat } from '../components/LiveChat';

interface Stream {
  id: string;
  title: string;
  streamer: {
    name: string;
    username: string;
    avatar: string;
  };
  viewers: number;
  thumbnail: string;
}

const MOCK_STREAMS: Stream[] = [
  {
    id: '1',
    title: 'Live Coding: Building a React App',
    streamer: {
      name: 'Tech with Sarah',
      username: 'techsarah',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    viewers: 1234,
    thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1280',
  },
  {
    id: '2',
    title: 'Gaming Stream: Minecraft Build Challenge',
    streamer: {
      name: 'Alex Gaming',
      username: 'alexgaming',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    },
    viewers: 856,
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1280',
  },
];

export function Live() {
  const [streams] = useState<Stream[]>(MOCK_STREAMS);
  const [selectedStream, setSelectedStream] = useState<Stream | null>(null);

  return (
    <div className="container mx-auto">
      {selectedStream ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <LiveStream stream={selectedStream} />
          </div>
          <div className="lg:col-span-1">
            <LiveChat streamId={selectedStream.id} />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {streams.map((stream) => (
            <div
              key={stream.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedStream(stream)}
            >
              <div className="relative">
                <img
                  src={stream.thumbnail}
                  alt={stream.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{stream.viewers}</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <img
                    src={stream.streamer.avatar}
                    alt={stream.streamer.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{stream.streamer.name}</h3>
                    <p className="text-sm text-gray-500">@{stream.streamer.username}</p>
                  </div>
                </div>
                <h2 className="text-lg font-medium">{stream.title}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}