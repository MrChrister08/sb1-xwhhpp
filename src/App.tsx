import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import AppRoutes from './routes';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <AppRoutes />
        </main>
        <Toaster richColors position="top-center" />
      </div>
    </BrowserRouter>
  );
}

export default App;