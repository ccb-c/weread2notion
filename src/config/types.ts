/**
 * 全局类型定义
 */

/**
 * 读书状态枚举
 */
export enum ReadStatus {
  NO = "未读完",
  YES = "已读完",
}

/**
 * 同步状态接口
 */
export interface SyncState {
  bookId: string;
  lastSyncTime: number;
  highlightsSynckey: string;
  thoughtsSynckey: string;
}

/**
 * 划线数据格式化后返回类型
 */
export interface HighlightsResponse {
  highlights: any[];
  bookInfo: any;
  synckey: string;
  hasUpdate: boolean;
}

/**
 * 想法数据格式化后返回类型
 */
export interface ThoughtsResponse {
  thoughts: any[];
  synckey: string;
  hasUpdate: boolean;
}

/**
 * 书籍内容同步结果类型
 */
export interface BookContentSyncResult {
  success: boolean;
  highlightsSynckey: string;
  thoughtsSynckey: string;
  hasUpdate: boolean;
  highlights: any[];
  thoughts: any[];
}

/**
 * Notion内容块类型
 */
export type NotionBlockType = "highlights" | "thoughts";
