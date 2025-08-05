import React, { useState } from 'react';
import { User } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon?: React.ReactNode;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ 
  src, 
  alt, 
  className = "", 
  fallbackIcon = <User className="w-12 h-12 text-yellow-400" />
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  if (imageError) {
    return (
      <div className={`${className} bg-gray-800 flex items-center justify-center`}>
        {fallbackIcon}
      </div>
    );
  }

  return (
    <div className="relative">
      {imageLoading && (
        <div className={`${className} bg-gray-800 flex items-center justify-center absolute inset-0`}>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${imageLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading="lazy"
      />
    </div>
  );
};

export default ImageWithFallback;