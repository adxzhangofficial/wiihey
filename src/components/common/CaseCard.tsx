import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { getImagePath } from '../../config';

interface CaseCardProps {
  image: string;
  title: string;
}

export default function CaseCard({ image, title }: CaseCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const imagePath = getImagePath(image);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={imagePath}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        {title && (
          <div className="p-3 bg-white">
            <p className="text-sm text-gray-700 text-center truncate">{title}</p>
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <X size={32} />
              </button>
              <img
                src={imagePath}
                alt={title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              {title && (
                <p className="text-white text-center mt-4">{title}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
