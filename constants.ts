import { WorkerEntry } from './types';

const NAMES = ['楚蒂冈', '1111', '关姥爷在此', '刘仕', '色调刚发的', '张师傅', '王大拿', '李李', '张三', '李四', '王五', '赵六', '陈小胖', '萧炎', '唐三', '林动', '牧尘', '韩立', '石昊', '叶凡'];
const LOCATIONS = ['上海市崇明区', '河南省洛阳市吉利区', '陕西省西安市雁塔区', '河南省洛阳市西工区', '新疆维吾尔自治区哈密市巴里坤哈萨克自治县', '北京市朝阳区'];
const TAG_POOL = ['黑单', '成单率低', '少给钱', '不按格式回款', '新黑名单', '跳单', '虚报报价', '投诉多'];
const NOTES = [
  '', 
  '', 
  '', 
  '发的感受发到发货的红烧豆腐还是合肥市但是发货', 
  '胜多负少大幅度撒个范德萨合适的适山东发货分公司计算机', 
  '多次遭到客户投诉服务态度差'
];
const AVATARS = [
  'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=4',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=5',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=6'
];

const ADMINS = ['管理员A', '审核员01', '系统自动', '陈序员', '张经理'];

export const GENERATE_MOCK_DATA = (tab: string): any[] => {
  if (tab === '试单奖励') {
    const trialNames = ['小胖', '小胖', '于谦', '于谦', '于谦', '萧炎', '萧炎', '萧炎', '萧炎', '萧炎', '唐三', '林动'];
    return Array.from({ length: 16 }, (_, index) => {
      const name = trialNames[index % trialNames.length];
      const statusSeed = index % 5;
      let status = '待审核';
      let auditTime = '';
      let auditor = '';
      let remark = '';
      let amount = '';

      if (statusSeed === 2 || statusSeed === 4) {
        status = '通过';
        auditTime = `2025-12-${String(16 - index).padStart(2, '0')} 11:${String(10 + index).padStart(2, '0')}:27`;
        auditor = '管理员';
        amount = (Math.random() * 5).toFixed(2);
        if (index === 4) { amount = '1.00'; remark = '通过'; }
        if (index === 7) { amount = '1.00'; remark = '问题'; }
        if (index === 8) { amount = '3.00'; remark = '1额度认为'; auditor = '张水明'; }
        if (index === 10) { amount = '2.00'; remark = '肉粉色找我'; }
      } else if (statusSeed === 3) {
        status = '不通过';
        auditTime = `2025-08-27 09:11:10`;
        auditor = '张水明';
        remark = '发的发生的';
      }

      return {
        id: index + 1,
        '序号': index + 1,
        '订单号': `25122${String(310000 + index * 1234).substring(0, 9)}`,
        '师傅姓名': name,
        '创建时间': `2025-12-23 10:${String(59 - index).padStart(2, '0')}:13`,
        '奖励金额': amount,
        '图片': `https://picsum.photos/seed/${index + 100}/50/50`, // Random thumbnail
        '审核状态': status,
        '审核时间': auditTime,
        '审核人': auditor,
        '审核说明': remark,
        '操作': '审核'
      };
    });
  }

  return Array.from({ length: 20 }, (_, index) => {
    const name = NAMES[index % NAMES.length];
    const admin = ADMINS[index % ADMINS.length];
    const dateStr = `2025-11-${String(10 + (index % 20)).padStart(2, '0')} ${String(10 + (index % 12)).padStart(2, '0')}:30:${String(10 + (index % 50)).padStart(2, '0')}`;
    const orderId = `251216090${10000 + index}`;
    const amount = (index * 15.5 + 0.1).toFixed(2);

    if (tab === '师傅黑名单') {
      const loc = LOCATIONS[index % LOCATIONS.length];
      const tags = [];
      const tagCount = (index % 3) + 1;
      for(let i=0; i<tagCount; i++) {
        tags.push(TAG_POOL[(index + i) % TAG_POOL.length]);
      }
      
      return {
        id: index + 1,
        avatar: AVATARS[index % AVATARS.length],
        '师傅姓名/昵称': name,
        '归属省市': loc,
        '手机号': `1${(index % 9) + 3}${Math.floor(10000000 + Math.random() * 90000000)}`,
        wechatId: `wx_${Math.random().toString(36).substring(7)}`,
        tags: tags,
        '状态': '已通过',
        '备注': NOTES[index % NOTES.length] || '',
        '序号': index + 1
      };
    }

    const row: any = {
      id: index + 1,
      '用户名': name,
      '师傅': name,
      '申请人': name,
      '退款人': name,
      '发起办人': admin,
      '待办人': name,
      '创建者': admin,
      '审核人': admin,
      '认缴人': admin,
      '派单员': admin,
      '出纳': '财务部-小张',
      '认证人': admin,
      
      '师傅uid': (440 - index).toString(),
      'UID': (440 - index).toString(),
      '手机号码': `157790${82000 + index}`,
      '手机号': `157790${82000 + index}`,
      
      '状态': index % 3 === 0 ? '生效' : (index % 3 === 1 ? '失效' : '待处理'),
      '审核状态': index % 2 === 0 ? '已上传' : '待审核',
      '退款状态': '退款成功',
      '支付状态': '已支付',
      '保证金状态': index % 4 === 0 ? '全额缴纳' : '部分缴纳',
      '处理进度': '处理中',
      
      '金额': amount,
      '需缴保证金': '0.1',
      '已缴保证金': '0.03',
      '支付金额': amount,
      '已退金额': '0.00',
      '综合评分': (50 + index * 0.5).toFixed(1),
      '信用分': '100',
      '排序': index + 1,
      
      '认证时间': dateStr,
      '审核时间': dateStr,
      '申请时间': dateStr,
      '出纳时间': dateStr,
      '创建时间': dateStr,
      '认缴时间': dateStr,
      '支付时间': dateStr,
      '退款发起时间': dateStr,
      '退款完成时间': dateStr,
      
      '订单号': orderId,
      '支付订单号': `PAY${orderId}`,
      '商户退款单号': `REF${orderId}`,
      '退款单号': `300220251216${200000 + index}`,
      
      '标题': index === 1 ? '综合评分规则' : (index === 2 ? '信用分规则' : '系统操作手册'),
      '内容': index % 2 === 0 ? '请返回订单情况，及时处理订单。' : '关于师傅库准入规则的详细说明...',
      '备注': '无',
      '审核说明': '符合要求',
      '出纳意见': '已打款',
      '审核意见': '通过',
      '反馈报告': '处理正常',
      '退款原因': '多付错付',
      '退款说明': '用户反馈操作失误',
      '师傅待办详情': '查看详情',
      
      '账户类型': '微信钱包',
      '是否打款': '是',
      '支付方式': '微信支付',
      '支付平台': '微信支付',
      
      '认证状态': '已认证',
      '接单状态': '是',
      '线下师傅': '否',
      '地域': '江西省南昌市',
      '项目': '家具维修',
      '分成': '类型:无固定分成',
      '品质': '良好',
      '完成率': '100%',
      '订单价值': '24.41元',
      '来源': '移动端',
      '营业执照': '',
      '认缴凭证': ''
    };

    return row;
  });
};

export const MOCK_DATA = GENERATE_MOCK_DATA('师傅库');