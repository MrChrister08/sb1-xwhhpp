interface StreamProps {
  stream: {
    title: string;
    streamer: {
      name: string;
      username: string;
      avatar: string;
    };
    viewers: number;
    thumbnail: string;
  };
}

export function LiveStream({ stream }: StreamProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
      <div className="aspect-video bg-black">
        <img
          src={stream.thumbnail}
          alt={stream.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img
              src={stream.streamer.avatar}
              alt={stream.streamer.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-bold">{stream.title}</h1>
              <p className="text-gray-500">
                {stream.streamer.name} • @{stream.streamer.username}
              </p>
            </div>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">
            Follow
          </button>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>{stream.viewers.toLocaleString()} viewers</span>
          <span>•</span>
          <span>Live</span>
        </div>
      </div>
    </div>
  );
}