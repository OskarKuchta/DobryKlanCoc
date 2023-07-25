import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface Fetch {
  data: any;
  loading: boolean;
  error: string | null;
}

interface Options {
  method: string;
  headers: {
    Accept: string;
    Authorization: string;
  };
}
const useFetch = (url): Fetch => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // const url: string = "api/v1/clans/%232qupvlcgc";
  // const url: string = "https://api.clashofclans.com/v1/clans/%23Y09R909";
  const token: string =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjI0MDViZDVlLTdmNzEtNDk3ZC1hODM4LWY0MzI2NzQwNDRmNyIsImlhdCI6MTY5MDE5MTExMSwic3ViIjoiZGV2ZWxvcGVyLzczZGY3Yjk0LThkNzktZWM0YS1iMjE0LWRlN2NiZmE2OTkxNiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE3OC4yMzUuMTg4LjI1NCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.5yl0ucurDoB4g0qXxfierPQV87xtSwnojL032q9Lqzck_yuPyS7RISArzlqD32JrJD48_w4253ammFh1ZnjYIg";
  const options: Options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };
  useEffect(() => {
    const fetchData: () => Promise<void> = async () => {
      try {
        const response: AxiosResponse = await axios.get(url, options);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error as string);
        setLoading(false);
      }
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
