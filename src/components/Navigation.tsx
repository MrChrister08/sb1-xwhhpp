import { Link } from 'react-router-dom';
import { Home, Tv, Users, MessageCircle, User } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

export function Navigation() {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 shadow-sm backdrop-blur-md dark:bg-gray-900/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <MessageCircle className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold">SocialHub</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link to="/" className="nav-link">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/live" className="nav-link">
              <Tv className="h-5 w-5" />
              <span>Live</span>
            </Link>
            <Link to="/discover" className="nav-link">
              <Users className="h-5 w-5" />
              <span>Discover</span>
            </Link>
            {isAuthenticated ? (
              <Link to={`/profile/${user?.username}`} className="nav-link">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}