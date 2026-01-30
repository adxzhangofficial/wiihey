import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { solutions } from '../../data/solutions';
import { getImagePath } from '../../config';

export default function SolutionsPreview() {
  const featuredSolutions = solutions.slice(0, 6);

  return (
    <section className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="解决方案"
          subtitle="基于OpenHarmony分布式架构，为千行百业提供数字化解决方案"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/solutions/${solution.id}`}
                className="group block bg-white/5 backdrop-blur rounded-xl overflow-hidden hover:bg-white/10 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={getImagePath(solution.coverImage)}
                    alt={solution.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-white mb-2">{solution.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-3">{solution.shortDesc}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-[#4472C4]/20 text-[#5B9BD5] text-xs rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-white font-medium hover:text-[#5B9BD5] hover:gap-3 transition-all"
          >
            查看全部方案 <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
