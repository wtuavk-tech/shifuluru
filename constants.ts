import { WorkerEntry } from './types';

const NAMES = ['于谦', '王昭君', '许仙', '线下面K', '王大拿', '李李', '张三', '李四', '王五', '赵六', '陈小胖', '萧炎', '唐三', '林动', '牧尘', '韩立', '石昊', '叶凡', '苏铭', '孟浩'];
const ADMINS = ['管理员A', '审核员01', '系统自动', '陈序员', '张经理'];
const STATUSES = ['已上传', '待审核', '已拒绝', '审核通过', '待补交', '部分缴纳', '已退回'];

export const GENERATE_MOCK_DATA = (tab: string): any[] => {
  return Array.from({ length: 20 }, (_, index) => {
    const name = NAMES[index % NAMES.length];
    const admin = ADMINS[index % ADMINS.length];
    const dateStr = `2025-11-${String(10 + (index % 20)).padStart(2, '0')} ${String(10 + (index % 12)).padStart(2, '0')}:30:${String(10 + (index % 50)).padStart(2, '0')}`;
    const orderId = `251216090${10000 + index}`;
    const amount = (index * 15.5 + 0.1).toFixed(2);

    // Default object with all potential keys to avoid "-" fallback where possible
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