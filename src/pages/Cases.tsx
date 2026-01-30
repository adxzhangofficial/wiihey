import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import CaseCard from '../components/common/CaseCard';
import { cases } from '../data/cases';

export default function Cases() {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-[#4472C4] to-[#365899] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">经典案例</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              威惠智能在智慧城市、工业物联网等领域的成功实践
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="项目展示"
            subtitle="点击图片查看大图"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {cases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <CaseCard image={caseItem.coverImage} title={caseItem.title} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="服务行业" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['智慧城市', '智能制造', '智慧水务', '桥梁隧道', '边坡地灾', '能源电力'].map((industry) => (
              <div key={industry} className="bg-white rounded-xl p-4 text-center shadow-md">
                <span className="text-gray-700 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
