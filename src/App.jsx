import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // The Canva embed URL is created by taking the view URL and appending ?embed
  const canvaEmbedUrl = "https://www.canva.com/design/DAHFqpZxEhk/sH0zbkqMFwagFoYXNvN51w/view?embed";

  return (
    <div className="w-screen h-screen bg-zinc-950 flex items-center justify-center overflow-hidden relative">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400 space-y-4 z-10">
          <Loader2 className="w-8 h-8 animate-spin text-zinc-100" />
          <p className="text-sm font-medium tracking-wide">Loading Portfolio...</p>
        </div>
      )}

      {/* Canva Embed Iframe */}
      <iframe
        className={`w-full h-full border-none transition-opacity duration-700 z-20 relative ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        src={canvaEmbedUrl}
        allowFullScreen
        allow="fullscreen"
        onLoad={() => setIsLoading(false)}
        title="Triple Pixels Portfolio"
      />
    </div>
  );
}
