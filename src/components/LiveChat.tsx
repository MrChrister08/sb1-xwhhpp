import { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

interface Message {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
}

const MOCK_MESSAGES: Message[] = [
  {
    id: '1',
    user: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400',
    },
    content: 'Great stream! Love the content 🎉',
    timestamp: '2024-02-28T10:00:00Z',
  },
  {
    id: '2',
    user: {
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    content: 'How did you learn to code so well?',
    timestamp: '2024-02-28T10:01:00Z',
  },
];

interface LiveChatProps {
  streamId: string;
}

export function LiveChat({ streamId }: LiveChatProps) {
  const [messages] = useState<Message[]>(MOCK_MESSAGES);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    // Handle message submission
    setNewMessage('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm h-[calc(100vh-12rem)]">
      <div className="p-4 border-b dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-5 h-5" />
          <h2 className="text-lg font-semibold">Live Chat</h2>
        </div>
      </div>
      <div className="flex flex-col h-[calc(100%-8rem)]">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start space-x-3">
              <img
                src={message.user.avatar}
                alt={message.user.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{message.user.name}</p>
                <p className="text-gray-600 dark:text-gray-300">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 rounded-full bg-gray-100 dark:bg-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white rounded-full p-2 hover:bg-indigo-700 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}