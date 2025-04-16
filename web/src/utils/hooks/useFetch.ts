import { useState } from "react";

type FetchFn<T> = () => Promise<T>;
type FetchFnWithArgs<T, A> = (arg: A) => Promise<T>;

const useFetch = <T, A>(
  fetchFn: FetchFn<T> | FetchFnWithArgs<T, A>,
  onSuccess: (result: T) => void
) => {
  const [loading, setLoading] = useState(false);

  const handleFetch = async (arg?: A) => {
    try {
      setLoading(true);
      const data = await (fetchFn as any)(arg);
      onSuccess(data);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleFetch,
  };
};

export { useFetch };
