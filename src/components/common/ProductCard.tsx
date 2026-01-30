import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  category: string;
}

export default function ProductCard({ name, description, image, category }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <Link to={`/products/${category}`}>
        <div className="aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-lg text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">{description}</p>
          <span className="inline-flex items-center gap-1 text-[#4472C4] text-sm font-medium">
            了解更多 <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
