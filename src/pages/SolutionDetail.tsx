import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Check, ArrowLeft } from 'lucide-react';
import { solutions } from '../data/solutions';

export default function SolutionDetail() {
  const { id } = useParams<{ id: string }>();
  const solution = solutions.find(s => s.id === id);

  if (!solution) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">解决方案未找到</h1>
          <Link to="/solutions" className="text-[#4472C4] hover:underline">返回解决方案</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-[#4472C4] to-[#365899] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <Link to="/" className="hover:text-white">首页</Link>
            <ChevronRight size={16} />
            <Link to="/solutions" className="hover:text-white">解决方案</Link>
            <ChevronRight size={16} />
            <span className="text-white">{solution.name}</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{solution.name}</h1>
            <p className="text-xl text-blue-100 max-w-3xl">{solution.shortDesc}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={solution.coverImage}
                alt={solution.name}
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">方案概述</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{solution.fullDesc}</p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">核心特点</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {solution.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                    <Check className="w-5 h-5 text-[#70AD47] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {solution.applications && solution.applications.length > 0 && (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">应用场景</h3>
                  <div className="flex flex-wrap gap-2">
                    {solution.applications.map((app) => (
                      <span
                        key={app}
                        className="px-4 py-2 bg-[#4472C4]/10 text-[#4472C4] rounded-full text-sm"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#4472C4] transition-colors"
            >
              <ArrowLeft size={20} />
              返回解决方案列表
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#4472C4] text-white rounded-lg font-medium hover:bg-[#365899] transition-colors"
            >
              咨询此方案
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
