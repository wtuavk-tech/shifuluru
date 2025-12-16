export interface WorkerEntry {
  id: number;
  creator: string;
  source: string; // The new requested column
  details: string;
  remark: string; // Can be empty string if no remark
  status: 'stocked' | 'unstocked'; // stocked = 已入库, unstocked = 未入库
  createdAt: string;
}

export interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}