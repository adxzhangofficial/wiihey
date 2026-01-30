import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getImagePath } from '../../config';

interface SolutionCardProps {
  id: string;
  name: string;
  shortDesc: string;
  coverImage: string;
}

export default function SolutionCard({ id, name, shortDesc, coverImage }: SolutionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
    >
      <Link to={`/solutions/${id}`}>
        <div className="relative aspect-video overflow-hidden">
          <img
            src={getImagePath(coverImage)}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h3 className="absolute bottom-4 left-4 right-4 font-bold text-lg text-white">
            {name}
          </h3>
        </div>
        <div className="p-5">
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">{shortDesc}</p>
          <span className="inline-flex items-center gap-1 text-[#4472C4] text-sm font-medium group-hover:gap-2 transition-all">
            查看详情 <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
