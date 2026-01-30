import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import { solutions } from '../data/solutions';

export default function Solutions() {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-[#4472C4] to-[#365899] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">解决方案</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              基于OpenHarmony分布式架构，为千行百业提供数字化解决方案
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="行业方案"
            subtitle="深度融合鸿蒙软总线协同能力与边缘智能决策引擎"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/solutions/${solution.id}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full"
                >
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={solution.coverImage}
                      alt={solution.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{solution.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{solution.shortDesc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {solution.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-[#4472C4]/10 text-[#4472C4] text-xs rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-[#4472C4] font-medium text-sm group-hover:gap-3 transition-all">
                      了解详情 <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
