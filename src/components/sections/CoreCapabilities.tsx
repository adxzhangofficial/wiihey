import { motion } from 'framer-motion';
import { Cpu, Shield, Zap, Radio, Cloud, Brain } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const capabilities = [
  {
    icon: Cpu,
    title: '鸿蒙终端智造',
    description: '自主研发智能传感器、鸿蒙控制器等终端产品，集成OpenHarmony与星闪通信技术',
  },
  {
    icon: Cloud,
    title: '全栈物联体系',
    description: '基于OpenHarmony分布式硬件能力构建设备协同中枢，打通端边云数据链路',
  },
  {
    icon: Brain,
    title: '生态技术赋能',
    description: '为伙伴提供鸿蒙操作系统全栈开发支持，覆盖硬件适配、组件开发、应用构建全流程',
  },
  {
    icon: Zap,
    title: '超低功耗',
    description: '通过事件驱动休眠唤醒与精细能耗控制技术，显著延长电池使用寿命',
  },
  {
    icon: Shield,
    title: '安全加密',
    description: '国密算法（SM4/SM9），结合TEE可信执行环境与SE安全芯片，实现全流程安全保障',
  },
  {
    icon: Radio,
    title: '可靠传输',
    description: '星闪/蓝牙/WiFi近场通信和NB/4G/5G远程通信相结合，支持Mesh组网',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CoreCapabilities() {
  return (
    <section id="capabilities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="核心能力"
          subtitle="基于OpenHarmony原生架构实现端边云协同管理，为全场景数智化提供自主可控的技术闭环"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#4472C4]/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-[#4472C4]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
