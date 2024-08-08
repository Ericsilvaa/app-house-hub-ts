import api from '@/api';
import { getItem, setItem } from '@/utils/localStorage';
import axios from 'axios';
import React from 'react';

type Options = {
  params?: any;
};

const STALE_TIME = 5 * 60 * 1000; // 5 minutes

const useFetch = (url: string, options?: Options) => {
  const [data, setData] = React.useState<any>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const abortControllerRef = React.useRef<AbortController | null>(null);

  const storageKey = React.useMemo(() => {
    if (!options?.params) return ``;

    return url + `?` + JSON.stringify(options.params);
  }, [url, options]);

  React.useEffect(() => {
    const fetchData = async () => {
      const currentTime = new Date().getTime();
      const cachedData = getItem(storageKey);

      if (cachedData && currentTime - cachedData.lastFetched < STALE_TIME) {
        setData(cachedData.data);
        setIsLoading(false);
        return;
      }

      abortControllerRef.current = new AbortController();

      setError(null);
      setIsLoading(true);

      try {
        const response = await api.get(url, {
          ...options,
          signal: abortControllerRef.current?.signal,
        });
        setData(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }

        setError('Algo deu errado. Tente novamente mais tarde.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      abortControllerRef.current?.abort();
    };
  }, [options, url]);

  // Save previus fetch data to local storage
  React.useEffect(() => {
    if (!data) return;

    setItem(storageKey, {
      lastFetched: new Date().getTime(),
      data,
    });
  }, [data, storageKey]);

  return { data, error, isLoading };
};

export default useFetch;
