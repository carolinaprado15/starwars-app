
export interface StatsDetails {
  topQueries: QueryDetails[],
  avgRequestTime: number;
  mostPopularHour: number;
  message?: string;
}

interface QueryDetails {
  query: string;
  count: number;
  percentage: number;
  _id: string
}