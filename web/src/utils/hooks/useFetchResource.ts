import { useState } from 'react';

type SearchFn<T> = (query: string) => Promise<{ result: T }>;

export const useFetchResource = <T>(
  searchFn: SearchFn<T>,
  onSuccess: (result: any) => void
) => {
  const [loading, setLoading] = useState(false);

  const handleFetch = async (query: string) => {
    setLoading(true);
    const data = await searchFn(query);

    onSuccess(data);
    setLoading(false);
  };

  return {
    loading,
    handleFetch,
  };
};