import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface Fetch {
  data: any;
  loading: boolean;
  error: string | null;
}

const useFetch = (url: string): Fetch => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const token: string =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImE5ZDY1MjlhLTE5NWUtNDQzNC1hMDdkLWVlOGVkMjczOWZkOCIsImlhdCI6MTY5MDk3ODkzMCwic3ViIjoiZGV2ZWxvcGVyLzczZGY3Yjk0LThkNzktZWM0YS1iMjE0LWRlN2NiZmE2OTkxNiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE3OC4yMzUuMTg4LjI1NCIsIjMuNjkuMjIuOTciLCIzNS4xNTkuMzMuMTkzIl0sInR5cGUiOiJjbGllbnQifV19.ZQCGRbgIC8mA2DV7BSsNIyz-QbEhb3kGLogJPumkEBhRniCkERv7WP8OktN5Klp0C8IG-fyAr4o8BU29dMC3Xg";
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const controller = new AbortController();
      try {
        const response: AxiosResponse = await axios.get(url, {
          ...options,
          signal: controller.signal,
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error as string);
        setLoading(false);
      }
      return () => {
        controller.abort();
      };
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export const ErrorBoundary: React.FC<any> = ({ children }) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleOnError = (error: any): void => {
    setHasError(true);
    setError(error);
  };

  if (hasError) {
    return <div>Something went wrong: {error?.toString()}</div>;
  }

  return <div onError={handleOnError}>{children}</div>;
};

export default useFetch;
