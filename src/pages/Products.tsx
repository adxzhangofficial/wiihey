import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import { productCategories } from '../data/products';
import { getImagePath } from '../config';

export default function Products() {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-[#4472C4] to-[#365899] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">产品中心</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              自主研发低功耗智能传感终端、鸿蒙控制器、边缘智能网关等硬件产品
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="产品系列"
            subtitle="集成开源鸿蒙操作系统及星闪通信技术，构建分布式物联体系"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/products/${category.id}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={getImagePath(category.image)}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{category.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{category.description}</p>
                    <span className="inline-flex items-center gap-2 text-[#4472C4] font-medium group-hover:gap-3 transition-all">
                      查看产品 <ArrowRight size={18} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="技术优势" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '超低功耗', desc: '事件驱动休眠唤醒，电池寿命5年+' },
              { title: '工业级防护', desc: 'IP68密封，-40℃~85℃宽温域' },
              { title: '鸿蒙生态', desc: 'OpenHarmony原生适配' },
              { title: '星闪通信', desc: '蓝牙+星闪双模，抗干扰增强20dB' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-md text-center">
                <h4 className="font-bold text-lg text-[#4472C4] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
