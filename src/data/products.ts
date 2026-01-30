export type ProductCategory = 
  | 'manhole'
  | 'environment'
  | 'structure'
  | 'datacollection'
  | 'positioning';

export interface ProductCategoryInfo {
  id: ProductCategory;
  name: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: ProductCategory;
  features?: string[];
}

export const productCategories: ProductCategoryInfo[] = [
  {
    id: 'manhole',
    name: '智能井盖产品系列',
    description: '基于OpenHarmony系统深度开发，集成蓝牙+星闪双模短距无线通信，实现井下复杂环境中的毫秒级近场互联',
    image: '/images/products/manhole/image71.png',
  },
  {
    id: 'environment',
    name: '环境监测产品系列',
    description: '集传感采集、数据传输、供电管理于一体，通过微型化设计降低部署成本',
    image: '/images/products/environment/image78.png',
  },
  {
    id: 'structure',
    name: '结构监测产品系列',
    description: '融合传感采集、数据传输与供电管理全链路能力，采用316L防爆不锈钢外壳+IP68密封防护',
    image: '/images/products/structure/image87.png',
  },
  {
    id: 'datacollection',
    name: '数据采集产品系列',
    description: '基于OpenHarmony分布式框架构建的智能监测体系，深度融合边缘计算节点与云端协同架构',
    image: '/images/products/datacollection/image90.png',
  },
  {
    id: 'positioning',
    name: '定位产品系列',
    description: '基于鸿蒙分布式协同与星闪高精度定位技术的智能定位体系，实现厘米级定位精度',
    image: '/images/products/positioning/image97.png',
  },
];

export const products: Product[] = [
  {
    id: 'smart-manhole-sensor',
    name: '物联多功能井盖智能传感器',
    description: '集成振动、可见光、磁场传感器，支持井下水位预警和气体检测，IP68防护，3年续航',
    image: '/images/products/manhole/image73.png',
    category: 'manhole',
    features: ['IP68防护', '3年续航', '远程升级', '无线扩展', '磁吸安装'],
  },
  {
    id: 'vertical-manhole-sensor',
    name: '物联垂直井盖智能传感器',
    description: '行程开关检测，电容式水位监测可选，8500mAh锂电池，5年工作年限',
    image: '/images/products/manhole/image74.png',
    category: 'manhole',
    features: ['行程开关', '5年工作年限', 'NB-IoT/4G Cat1', 'IP68防水'],
  },
  {
    id: 'water-level-sensor',
    name: '一体化投入式水位计',
    description: '电容式液位传感器，量程0~50米，精度10mm，内置锂亚电池36月续航',
    image: '/images/products/environment/image75.png',
    category: 'environment',
    features: ['304不锈钢', 'IP68防护', '36月续航', '量程0-50m'],
  },
  {
    id: 'capacitive-water-sensor',
    name: '电容式水位检测终端',
    description: '结构简单，无任何可动或弹性元部件，支持NB-IoT/4G等无线通讯',
    image: '/images/products/environment/image76.png',
    category: 'environment',
    features: ['自检功能', '水位警戒线可设置', '异常上报'],
  },
  {
    id: 'pressure-sensor',
    name: '一体化渗压计',
    description: '振弦式孔隙水压力传感器，量程0~1MPa，精度≤±0.1% F.S',
    image: '/images/products/environment/image79.png',
    category: 'environment',
    features: ['316L不锈钢', '温度自动补偿', '超压报警', '量程0~2MPa可定制'],
  },
  {
    id: 'gas-sensor',
    name: '分布式气体感知单元',
    description: 'MEMS气体传感器，实时检测H₂S、CO、CO₂、O₂、CH₄、TVOC、PM2.5',
    image: '/images/products/environment/image77.png',
    category: 'environment',
    features: ['自动校准', 'RS485 MODBUS', '阈值报警', '防爆铸铝壳体'],
  },
  {
    id: 'soil-pressure',
    name: '土压力计',
    description: '监测土体/孔隙水压力，量程0~5MPa，精度±0.5% F.S.',
    image: '/images/products/structure/image81.png',
    category: 'structure',
    features: ['不锈钢外壳', 'IP68全密封', '频率输出', '绝缘电阻≥50MΩ'],
  },
  {
    id: 'surface-strain',
    name: '表面应变计',
    description: '监测混凝土/钢结构表面应变，量程±3000με，精度±0.5% F.S.',
    image: '/images/products/structure/image82.png',
    category: 'structure',
    features: ['温度自动补偿', '双向拉压', 'IP68', '-40℃~+85℃'],
  },
  {
    id: 'rebar-meter',
    name: '钢筋计',
    description: '监测钢筋混凝土内部应力/应变，量程拉400MPa、压200MPa',
    image: '/images/products/structure/image80.png',
    category: 'structure',
    features: ['Ø16~40mm适配', '精度±0.5% F.S.', '绝缘电阻≥50MΩ'],
  },
  {
    id: 'embedded-strain',
    name: '埋入式应变计',
    description: '监测混凝土内部核心区应变，量程±3000με，耐侧压力≥60MPa',
    image: '/images/products/structure/image83.png',
    category: 'structure',
    features: ['精度±0.05% F.S.', 'IP68全密封焊接', '双模输出'],
  },
  {
    id: 'anchor-meter',
    name: '锚索计',
    description: '监测锚索/锚杆轴向荷载，量程0-5000KN，精度±0.5% F.S.',
    image: '/images/products/structure/image84.png',
    category: 'structure',
    features: ['分辨力≤0.05% F.S.', '过载1.2倍', 'IP68全密封'],
  },
  {
    id: 'array-displacement',
    name: '阵列式位移计',
    description: '监测三维形变与倾斜，0～360°全向角度覆盖，位移精度0.02mm@500mm/节',
    image: '/images/products/structure/image89.png',
    category: 'structure',
    features: ['分辨率0.05mm', 'IP68密封', '耐水压2MPa', 'RS485 MODBUS'],
  },
  {
    id: 'crack-meter',
    name: '电阻式裂缝计',
    description: '监测结构缝开合度与滑移，量程10-300mm可选，线性±0.1%',
    image: '/images/products/structure/image85.png',
    category: 'structure',
    features: ['重复性0.01mm', 'NB-IoT/4G Cat.1', 'IP68', '-60℃~150℃'],
  },
  {
    id: 'wireless-inclinometer',
    name: '无线倾角仪',
    description: '监测结构体三维姿态，倾角量程±90°，精度0.005°，响应速度15ms',
    image: '/images/products/structure/image86.png',
    category: 'structure',
    features: ['分辨率0.001°', 'NB-IoT/4G', 'IP68', '续航≥12月'],
  },
  {
    id: 'static-level',
    name: '静力水准仪',
    description: '监测结构垂直沉降，量程0～500mm，精度±0.1mm',
    image: '/images/products/structure/image88.png',
    category: 'structure',
    features: ['温漂≤0.007% F.S./℃', 'RS485', 'IP68', '耐水压0.2MPa'],
  },
  {
    id: 'single-channel',
    name: '单通道采集仪',
    description: '鸿蒙赋能端边云一体化管控，超低功耗设计，休眠电流≤50μA',
    image: '/images/products/datacollection/image91.png',
    category: 'datacollection',
    features: ['RS485/振弦接入', '3年免维护', '-40℃~85℃', 'IP68'],
  },
  {
    id: 'multi-channel',
    name: '多通道采集仪',
    description: '多通道振弦式传感器接入，内置大容量电池，可选4/8/16/32通道',
    image: '/images/products/datacollection/image94.png',
    category: 'datacollection',
    features: ['抗冲击外壳', '3年续航', '数据误报率≤0.1%'],
  },
  {
    id: 'smart-control-box',
    name: '智能物联控制箱',
    description: '监测控制一体化，高亮LCD屏实时刷新，工业级PLC毫秒级响应',
    image: '/images/products/datacollection/image92.png',
    category: 'datacollection',
    features: ['触摸控制', '远程升级', 'IP55', 'MTBF≥15000h'],
  },
  {
    id: 'edge-controller',
    name: '鸿蒙边缘控制器',
    description: '融合互联，五路通信链路并行承载，七种工业协议智能互转',
    image: '/images/products/datacollection/image93.png',
    category: 'datacollection',
    features: ['1000点位采集', '边缘计算', '6组IO扩展', '磁吸式自动识别'],
  },
  {
    id: 'positioning-tag',
    name: '定位标签',
    description: '星闪SLE+蓝牙BLE双模，5年超长续航，毫秒级告警触发',
    image: '/images/products/positioning/image95.png',
    category: 'positioning',
    features: ['静态≤3μA', '续航≥5年', '100-150m距离', '远程配置'],
  },
  {
    id: 'positioning-base',
    name: '定位基站',
    description: '厘米级动态定位引擎，复杂环境全覆盖，200-300米Mesh自组网',
    image: '/images/products/positioning/image96.png',
    category: 'positioning',
    features: ['断电续传72小时', '4G全网通', '铝合金壳体', '三种安装方式'],
  },
  {
    id: 'gnss',
    name: 'GNSS高精度定位',
    description: '四星十六频，RTK平面±8mm，高程±15mm，OTF初始化<5秒',
    image: '/images/products/positioning/image100.png',
    category: 'positioning',
    features: ['北斗三B1C/B2a', '9800mAh锂电', 'IP67', '太阳能供电'],
  },
  {
    id: 'smart-badge',
    name: '智能电子工牌',
    description: '五重定位精度5米，纯钴电池7天续航，Type-C快充',
    image: '/images/products/positioning/image99.png',
    category: 'positioning',
    features: ['GPS/北斗/WiFi/LBS', 'SOS一键求助', '电子围栏', '轨迹回溯'],
  },
];
