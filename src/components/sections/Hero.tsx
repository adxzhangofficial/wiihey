import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from '../common/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero/image1.jpeg"
          alt="WiiHey Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            通过硬核技术的融合创新
            <br />
            <span className="text-[#5B9BD5]">重构安全可靠的物联世界</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            以AI物联感知与鸿蒙技术底座为核心，构建覆盖智慧城市、智能制造、智能家居等领域的分布式物联体系
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-30">
            <Button href="/solutions" variant="primary" size="lg">
              解决方案
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              联系我们
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a
            href="#capabilities"
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2">了解更多</span>
            <ChevronDown size={24} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
