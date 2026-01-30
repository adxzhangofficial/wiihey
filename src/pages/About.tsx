import { motion } from 'framer-motion';
import { Award, Users, Building2, Lightbulb, Shield, Zap } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';

const values = [
  { icon: Lightbulb, title: '超越自我', desc: 'Beyond Self' },
  { icon: Shield, title: '正直诚信', desc: 'Trust & True' },
  { icon: Users, title: '责无旁贷', desc: 'Own It All' },
  { icon: Zap, title: '开放包容', desc: 'All In, All Win' },
];

const honors = [
  '中国智慧城市投资建设联盟理事单位',
  '中国人工智能产业创新联盟成员',
  'OpenHarmony 生态核心贡献者',
  'OpenHarmony 兼容性认证',
  '万物互联产业联盟会员',
  '上海市物联网协会会员',
  '中国创新创业大赛获奖',
  '对外贸易经营者备案',
];

const partners = [
  { name: '哈尔滨工程大学', dept: '机电工程学院', focus: '复杂环境智能监测装备开发' },
  { name: '西北工业大学', dept: '深圳研究院', focus: '空天地一体化智能感知终端研发' },
  { name: '浙江大学', dept: '控制科学与工程学院', focus: '工业机器视觉缺陷检测算法' },
];

export default function About() {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-[#4472C4] to-[#365899] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">关于威惠智能</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              以AI物联感知与鸿蒙技术底座为核心的高科技企业
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">公司简介</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  深圳威惠智能科技有限公司（简称"威惠智能"）自主研发低功耗智能传感终端、鸿蒙控制器、全场景显示屏、边缘智能网关等硬件产品，集成开源鸿蒙操作系统及星闪通信技术，构建覆盖智慧城市、智能制造、智能家居等领域的分布式物联体系。
                </p>
                <p>
                  通过OpenHarmony原生架构实现端边云协同管理，向生态伙伴输出鸿蒙深度定制产品及服务，为全场景数智化提供自主可控的技术闭环。
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/about/image10.png"
                alt="威惠智能"
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="企业愿景与使命" />
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-[#4472C4] mb-3">愿景 Vision</h3>
              <p className="text-2xl font-semibold text-gray-900">构建万物互联的智慧世界</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-[#4472C4] mb-3">使命 Mission</h3>
              <p className="text-2xl font-semibold text-gray-900">通过硬核技术的融合创新，重构安全可靠的物联世界</p>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-center text-gray-900 mb-8">价值观 Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 text-center shadow-md"
              >
                <item.icon className="w-10 h-10 text-[#4472C4] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="产学研合作" subtitle="联合顶尖院校，推动创新技术产业化落地" />
          <div className="grid md:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#4472C4]"
              >
                <Building2 className="w-10 h-10 text-[#4472C4] mb-4" />
                <h3 className="font-bold text-lg text-gray-900">{partner.name}</h3>
                <p className="text-[#4472C4] text-sm mb-2">{partner.dept}</p>
                <p className="text-gray-600 text-sm">{partner.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="资质荣誉" light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {honors.map((honor) => (
              <motion.div
                key={honor}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur rounded-lg p-4 flex items-center gap-3"
              >
                <Award className="w-6 h-6 text-[#FFC000] flex-shrink-0" />
                <span className="text-sm">{honor}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
