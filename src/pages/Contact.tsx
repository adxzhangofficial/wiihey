import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';

const contactInfo = [
  {
    icon: Phone,
    title: '电话',
    lines: ['0755-27958860', '18576626150', '18124533166'],
  },
  {
    icon: Mail,
    title: '邮箱',
    lines: ['andrew@wiihey.com'],
  },
  {
    icon: MapPin,
    title: '深圳总部',
    lines: ['深圳市南山区粤海街道', '科技南八路2号豪威科技大厦2111室'],
  },
  {
    icon: MapPin,
    title: '上海办事处',
    lines: ['上海市普陀区中江路118弄', '海亮大厦B座6楼D032'],
  },
];

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-[#4472C4] to-[#365899] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">联系我们</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              我们的团队将为您提供专业的技术支持与服务
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="联系方式" subtitle="欢迎通过以下方式与我们取得联系" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md text-center"
              >
                <div className="w-14 h-14 bg-[#4472C4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#4472C4]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
                {item.lines.map((line) => (
                  <p key={line} className="text-gray-600 text-sm">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">公司信息</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">深圳威惠智能科技有限公司</h3>
                  <p className="text-gray-600">Shenzhen WiiHey Technologies Co., Ltd</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#4472C4] mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">工作时间</p>
                    <p className="text-gray-600">周一至周五 9:00 - 18:00</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-2">官方网站</p>
                  <a
                    href="https://www.wiihey.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4472C4] hover:underline"
                  >
                    www.wiihey.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">合作咨询</h2>
              <p className="text-gray-600 mb-6">
                如果您对我们的产品或解决方案感兴趣，欢迎通过以下方式联系我们的商务团队：
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white rounded-lg p-4">
                  <Phone className="w-5 h-5 text-[#4472C4]" />
                  <div>
                    <p className="text-sm text-gray-500">商务合作</p>
                    <p className="font-medium text-gray-900">18576626150</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-4">
                  <Mail className="w-5 h-5 text-[#4472C4]" />
                  <div>
                    <p className="text-sm text-gray-500">邮件咨询</p>
                    <p className="font-medium text-gray-900">andrew@wiihey.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
