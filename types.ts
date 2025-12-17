export interface WorkerEntry {
  id: number;
  name: string;
  phone: string;
  uid: string;
  isCertified: boolean;
  remark: string;
  acceptOrders: boolean; // 接单状态
  canDispatch: boolean; // 可派单
  isOffline: boolean; // 是否线下师傅
  region: string;
  project: string;
  subProject: string;
  splitInfo: {
    type: string;
    removeCost: boolean;
    ratio: number;
  };
  quality: string;
  completion: {
    last30Days: string; // e.g., "18%(2/11)"
    total: string;      // e.g., "25%(3/12)"
    last10: string;     // e.g., "20%(2/10)"
  };
  orderValue: {
    avg: string;          // e.g., "10.17元(122.03/12)"
    avgCompleted: string; // e.g., "24.41元(122.03/5)"
  };
  inTransit: {
    current: number;
    last10: number;
  };
  // New columns from the screenshot
  referral: {
    name: string;
    commission: string;
  };
  score: {
    composite: number;
    credit: number;
  };
  deposit: {
    required: number;
    paid: number;
  };
  depositType: string;
  pendingOrderCount: number;
  evaluationStatus: string;
  regMethod: string;
  certInfo: {
    person: string;
    time: string;
  };
  platformFee: {
    tech: string;
    penalty: string;
  };
}

export interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}