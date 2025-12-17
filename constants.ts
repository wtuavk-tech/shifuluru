import { WorkerEntry } from './types';

const NAMES = [
  '于谦', '王昭君', '许仙', '线下面K', '王大拿', '李李', 
  '张三', '李四', '王五', '赵六', '孙七', '周八', '吴九', '郑十',
  '陈十一', '刘十二', '朱十三', '秦十四', '尤十五', '许十六'
];

const PROJECTS = ['家具维修', '热水器安装/拆除', '疏通蹲厕,数码回收,家具回收', '开荒保洁', '搬运电瓶车', '家庭水电,打孔扩孔'];
const REGIONS = ['江西省南昌市新建区', '河北省石家庄长安区', '河北省秦皇岛市海港区', '天津市河东区', '山西省长治市潞州区', '北京市东城区'];

export const MOCK_DATA: WorkerEntry[] = Array.from({ length: 20 }, (_, index) => {
  const name = NAMES[index % NAMES.length];
  const phonePrefix = ['157', '158', '139', '188', '133', '186'][index % 6];
  const phone = `${phonePrefix}${Math.floor(10000000 + Math.random() * 90000000)}`;
  
  return {
    id: index + 1,
    name: name,
    phone: phone,
    uid: (440 - index * 13 > 0 ? 440 - index * 13 : 440 + index).toString(),
    isCertified: true,
    remark: index === 2 ? '2025-10-16 17:35:28' : '',
    acceptOrders: index % 4 !== 3, 
    canDispatch: index % 4 !== 3,
    isOffline: index % 3 !== 0,
    region: REGIONS[index % REGIONS.length],
    project: PROJECTS[index % PROJECTS.length],
    subProject: '',
    splitInfo: {
      type: index % 3 === 2 ? '固定分成' : '无固定分成',
      removeCost: true,
      ratio: Number((0.3 + Math.random() * 0.4).toFixed(1)),
    },
    quality: ['优秀', '良好', '一般'][index % 3],
    completion: {
      last30Days: `${Math.floor(Math.random() * 50)}%(${Math.floor(Math.random()*5)}/${Math.floor(Math.random()*20 + 5)})`,
      total: `${Math.floor(Math.random() * 50)}%(${Math.floor(Math.random()*10)}/${Math.floor(Math.random()*50 + 10)})`,
      last10: `${Math.floor(Math.random() * 50)}%(${Math.floor(Math.random()*2)}/10)`,
    },
    orderValue: {
      avg: `${(Math.random() * 20).toFixed(2)}元(${Math.floor(Math.random()*200)}/${Math.floor(Math.random()*20)})`,
      avgCompleted: `${(Math.random() * 30).toFixed(2)}元(${Math.floor(Math.random()*200)}/${Math.floor(Math.random()*10)})`,
    },
    inTransit: {
      current: Math.floor(Math.random() * 8),
      last10: Math.floor(Math.random() * 8),
    },
    referral: {
      name: '推荐人:',
      commission: '推荐奖励金额:',
    },
    score: {
      composite: Number((50 + Math.random() * 50).toFixed(1)),
      credit: 100,
    },
    deposit: {
      required: 0.1,
      paid: 0.03,
    },
    depositType: index % 2 === 0 ? '每单小额保证金' : '全额缴纳保证金',
    pendingOrderCount: index % 2 === 0 ? 3 : 0,
    evaluationStatus: '待评价',
    regMethod: index % 3 === 0 ? '手动新增' : '用户注册',
    certInfo: {
      person: index % 3 === 0 ? '' : '管理员',
      time: index % 3 === 0 ? '' : `2025-11-11 ${String(10+index).slice(-2)}:46:52`,
    },
    platformFee: {
      tech: '0.01',
      penalty: '0',
    },
  };
});