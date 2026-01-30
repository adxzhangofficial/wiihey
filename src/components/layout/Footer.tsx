import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { getImagePath } from '../../config';

const quickLinks = [
  { path: '/products', label: '产品中心' },
  { path: '/solutions', label: '解决方案' },
  { path: '/cases', label: '经典案例' },
  { path: '/about', label: '关于我们' },
];

const solutions = [
  { path: '/solutions/smart-manhole', label: '智能井盖方案' },
  { path: '/solutions/tunnel', label: '隧道监测方案' },
  { path: '/solutions/bridge', label: '桥梁监测方案' },
  { path: '/solutions/water-service', label: '智慧水务方案' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={getImagePath('/images/logo/image7.png')}
                alt="WiiHey Logo"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              以AI物联感知与鸿蒙技术底座为核心的高科技企业，通过硬核技术的融合创新，重构安全可靠的物联世界。
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>OpenHarmony</span>
              <span className="text-[#4472C4]">生态核心贡献者</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">快捷链接</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">解决方案</h4>
            <ul className="space-y-2">
              {solutions.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">联系我们</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-[#4472C4]" />
                <div>
                  <p>0755-27958860</p>
                  <p>18576626150 / 18124533166</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="flex-shrink-0 text-[#4472C4]" />
                <span>andrew@wiihey.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#4472C4]" />
                <div>
                  <p>深圳·南山粤海街道科技南八路2号</p>
                  <p>豪威科技大厦2111室</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} 深圳威惠智能科技有限公司 版权所有
          </p>
          <p className="text-gray-500 text-sm">
            Shenzhen WiiHey Technologies Co., Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}
