import fs from 'fs';
import path from 'path';

const sourceDir = '../workspace/ppt_extracted/ppt/media';
const targetBase = './public/images';

// 幻灯片与图片的映射关系
const slideImageMapping = {
  // Slide 1 - Hero/首页背景
  hero: ['image1.jpeg', 'image2.jpeg', 'image3.jpeg'],
  
  // Logo
  logo: ['image6.svg', 'image7.png', 'image8.jpg'],
  
  // Slide 3-7 - 关于我们/技术
  about: [
    'image9.png', 'image10.png', 'image11.png', 'image12.png', 'image13.png', 'image14.png',
    'image15.png', 'image16.png', 'image17.png', 'image18.png', 'image19.png', 'image20.png',
    'image21.png', 'image22.png', 'image23.png', 'image24.png', 'image25.png', 'image26.png',
    'image27.png', 'image28.png', 'image29.png', 'image30.png', 'image31.png', 'image32.png', 'image33.png'
  ],
  
  // Slide 6 - 芯片适配
  tech: [
    'image34.png', 'image35.png', 'image36.png', 'image37.png', 'image38.png', 'image39.png',
    'image40.png', 'image41.png', 'image42.png', 'image43.png', 'image44.png', 'image45.png', 'image46.png'
  ],
  
  // Slide 7 - 系统发行版/云平台
  'products/datacollection': [
    'image47.png', 'image48.png', 'image49.png', 'image51.png', 'image53.png', 'image55.png',
    'image57.png', 'image59.png', 'image62.png', 'image63.png', 'image64.png', 'image65.png',
    'image66.png', 'image67.png', 'image68.png', 'image69.png', 'image70.png',
    'image90.png', 'image91.png', 'image92.png', 'image93.png', 'image94.png'
  ],
  
  // Slide 8 - 智能井盖产品
  'products/manhole': [
    'image71.png', 'image72.png', 'image73.png', 'image74.png'
  ],
  
  // Slide 9 - 环境监测产品
  'products/environment': [
    'image75.png', 'image76.png', 'image77.png', 'image78.png', 'image79.png'
  ],
  
  // Slide 10 - 结构监测产品
  'products/structure': [
    'image80.png', 'image81.png', 'image82.png', 'image83.png', 'image84.png',
    'image85.png', 'image86.png', 'image87.png', 'image88.png', 'image89.png'
  ],
  
  // Slide 12 - 定位产品
  'products/positioning': [
    'image95.png', 'image96.png', 'image97.png', 'image98.png', 'image99.png', 'image100.png'
  ],
  
  // Slide 13 - 开源鸿蒙解决方案
  'solutions/openharmony': [
    'image101.png', 'image102.png', 'image104.png', 'image106.png', 'image108.png', 'image110.png',
    'image112.png', 'image114.png', 'image115.png', 'image116.png', 'image117.png', 'image118.png',
    'image119.png', 'image120.png', 'image121.png', 'image122.png', 'image123.png', 'image124.png',
    'image125.png', 'image126.png', 'image127.png', 'image128.png', 'image129.png', 'image130.png',
    'image131.png', 'image132.png', 'image133.png', 'image134.png', 'image135.png', 'image136.png',
    'image137.png', 'image138.png', 'image139.png', 'image140.png', 'image141.png', 'image142.png'
  ],
  
  // Slide 14 - 智能井盖解决方案
  'solutions/smart-manhole': [
    'image143.png', 'image144.png', 'image145.png', 'image146.png', 'image147.png', 'image148.png',
    'image149.png', 'image150.png', 'image151.png', 'image152.png', 'image153.png', 'image154.png',
    'image156.png', 'image157.png', 'image158.jpeg', 'image159.jpeg', 'image160.jpeg', 'image161.png',
    'image162.png', 'image164.png', 'image166.png', 'image168.png', 'image170.png', 'image172.png'
  ],
  
  // Slide 15 - 隧道积水监测
  'solutions/tunnel': [
    'image174.png', 'image176.png', 'image178.png', 'image180.png', 'image181.png', 'image182.png',
    'image183.png', 'image184.png', 'image185.png', 'image186.png', 'image187.png', 'image188.png',
    'image189.png', 'image190.jpeg', 'image191.jpeg', 'image192.png', 'image193.png', 'image194.jpeg',
    'image195.png', 'image197.png', 'image199.png', 'image201.png'
  ],
  
  // Slide 16 - 边坡安全监测
  'solutions/slope': [
    'image203.png', 'image204.png', 'image205.png', 'image206.png', 'image207.png', 'image208.png',
    'image209.png', 'image210.png', 'image211.png', 'image212.png', 'image213.png', 'image214.png',
    'image215.png', 'image216.png', 'image217.png', 'image218.png', 'image220.png', 'image222.png',
    'image224.png', 'image226.png', 'image227.png', 'image228.png', 'image229.png', 'image230.png',
    'image232.png', 'image234.png'
  ],
  
  // Slide 17 - 桥梁安全监测
  'solutions/bridge': [
    'image236.png', 'image238.png', 'image240.png', 'image242.png', 'image243.png', 'image244.png',
    'image245.png', 'image246.png', 'image247.png', 'image248.png', 'image249.png', 'image250.png',
    'image251.png', 'image252.png', 'image253.png', 'image255.png', 'image257.png', 'image259.png'
  ],
  
  // Slide 18 - 有限空间安全
  'solutions/confined-space': [
    'image261.png', 'image262.png', 'image263.png', 'image264.png', 'image265.png', 'image266.png',
    'image267.png', 'image269.png', 'image271.png', 'image273.jpeg', 'image274.jpeg', 'image275.png',
    'image276.png', 'image277.png', 'image278.png', 'image279.png', 'image280.png', 'image281.png',
    'image282.png', 'image283.png', 'image284.png', 'image285.png', 'image286.png', 'image287.png', 'image289.png'
  ],
  
  // Slide 19 - 智慧水务
  'solutions/water-service': [
    'image290.png', 'image291.png', 'image292.png', 'image293.png', 'image294.png', 'image295.png',
    'image296.png', 'image297.png', 'image298.png', 'image299.png', 'image300.png', 'image301.png',
    'image302.png', 'image303.png', 'image304.png', 'image305.png', 'image306.png', 'image307.png',
    'image308.png', 'image309.png', 'image310.png', 'image312.png', 'image314.png', 'image316.png',
    'image318.png', 'image319.png', 'image320.png', 'image321.png', 'image323.png', 'image325.png'
  ],
  
  // Slide 20 - 智慧水利
  'solutions/water-resources': [
    'image327.png', 'image328.png', 'image329.png', 'image330.png', 'image331.png', 'image332.png',
    'image333.png', 'image334.png', 'image335.png', 'image336.png', 'image337.png', 'image338.png',
    'image339.png', 'image340.png', 'image341.png', 'image342.png', 'image343.png', 'image344.png',
    'image346.png', 'image348.png', 'image350.png', 'image351.png', 'image352.png', 'image353.png',
    'image354.png', 'image355.png', 'image357.png', 'image359.png', 'image361.png'
  ],
  
  // Slide 21 - 工程建筑安全
  'solutions/construction': [
    'image363.png', 'image365.png', 'image366.png', 'image367.png', 'image368.png', 'image369.png',
    'image370.png', 'image371.png', 'image372.png', 'image373.png', 'image374.png', 'image375.png',
    'image376.png', 'image377.png', 'image378.png', 'image379.png', 'image380.png', 'image382.png',
    'image384.png', 'image386.png', 'image388.jpg', 'image389.png', 'image390.png', 'image391.png',
    'image392.png', 'image393.png', 'image395.png', 'image397.png'
  ],
  
  // Slide 22 - 机房动环监控
  'solutions/datacenter': [
    'image399.jpg', 'image400.png', 'image401.png', 'image402.png', 'image403.png', 'image404.png',
    'image405.png', 'image406.png', 'image407.png', 'image408.png', 'image409.png', 'image410.png',
    'image411.png', 'image412.png', 'image413.png', 'image414.png', 'image415.png', 'image416.png',
    'image417.png', 'image418.png', 'image419.png', 'image420.png', 'image421.png', 'image422.png',
    'image423.png', 'image424.png', 'image425.png', 'image426.png', 'image427.png', 'image428.png',
    'image430.png', 'image432.png', 'image434.png', 'image436.png', 'image438.png', 'image440.png',
    'image442.jpeg', 'image443.png', 'image444.png'
  ],
  
  // Slide 23 - 地质灾害监测
  'solutions/geological': [
    'image445.png', 'image446.png', 'image447.png', 'image448.png', 'image449.png', 'image450.png',
    'image451.png', 'image452.png', 'image453.png', 'image454.png', 'image455.png', 'image456.jpeg',
    'image457.png', 'image459.png', 'image461.png', 'image463.png', 'image465.png', 'image467.png',
    'image469.png', 'image471.png', 'image472.png', 'image473.png', 'image474.png'
  ],
  
  // Slide 24-25 - 案例
  cases: [
    'image475.png', 'image476.png', 'image477.png', 'image478.png', 'image479.png', 'image480.png',
    'image481.png', 'image482.png', 'image483.png', 'image484.png', 'image485.png',
    'image486.png', 'image487.png', 'image488.png', 'image489.png', 'image490.png', 'image491.png',
    'image492.png', 'image493.png', 'image494.png', 'image495.png', 'image496.png', 'image497.png',
    'image498.png', 'image499.png', 'image500.jpg', 'image501.jpg', 'image502.jpg', 'image503.jpg', 'image504.jpg'
  ],
  
  // Slide 28 - 联系
  contact: ['image505.png', 'image506.png']
};

// 复制文件的函数
function copyFile(src, dest) {
  try {
    if (fs.existsSync(src)) {
      const destDir = path.dirname(dest);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      fs.copyFileSync(src, dest);
      console.log(`Copied: ${src} -> ${dest}`);
      return true;
    } else {
      console.log(`Source not found: ${src}`);
      return false;
    }
  } catch (err) {
    console.error(`Error copying ${src}: ${err.message}`);
    return false;
  }
}

// 主函数
function organizeImages() {
  let copied = 0;
  let failed = 0;
  
  for (const [category, images] of Object.entries(slideImageMapping)) {
    const targetDir = path.join(targetBase, category);
    
    for (const image of images) {
      const srcPath = path.join(sourceDir, image);
      const destPath = path.join(targetDir, image);
      
      if (copyFile(srcPath, destPath)) {
        copied++;
      } else {
        failed++;
      }
    }
  }
  
  console.log(`\n=== Summary ===`);
  console.log(`Copied: ${copied} files`);
  console.log(`Failed: ${failed} files`);
}

organizeImages();
