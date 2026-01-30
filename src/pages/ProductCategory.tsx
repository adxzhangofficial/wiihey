import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Check } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import { products, productCategories, type ProductCategory } from '../data/products';
import { getImagePath } from '../config';

export default function ProductCategoryPage() {
  const { category } = useParams<{ category: string }>();
  const categoryInfo = productCategories.find(c => c.id === category);
  const categoryProducts = products.filter(p => p.category === category as ProductCategory);

  if (!categoryInfo) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">产品分类未找到</h1>
          <Link to="/products" className="text-[#4472C4] hover:underline">返回产品中心</Link>
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
            <Link to="/products" className="hover:text-white">产品中心</Link>
            <ChevronRight size={16} />
            <span className="text-white">{categoryInfo.name}</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{categoryInfo.name}</h1>
            <p className="text-xl text-blue-100 max-w-2xl">{categoryInfo.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="产品列表" subtitle={`共 ${categoryProducts.length} 款产品`} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden bg-white-100">
                  <img
                    src={getImagePath(product.image)}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  {product.features && (
                    <div className="space-y-2">
                      {product.features.slice(0, 4).map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check size={14} className="text-[#70AD47]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#4472C4] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">需要了解更多产品信息？</h2>
          <p className="text-blue-100 mb-6">我们的技术团队将为您提供专业的产品咨询服务</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#4472C4] rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            联系我们
          </Link>
        </div>
      </section>
    </div>
  );
}
