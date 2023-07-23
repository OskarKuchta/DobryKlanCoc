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
const useFetch = (): Fetch => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const url: string = "api/v1/clans/%23Y09R909";
  const token: string =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImE3NjlkYTcxLTFhMWQtNDdmZC1iZTc4LTM1MTY5YmQ0NWYwNyIsImlhdCI6MTY4OTM2MjA0MSwic3ViIjoiZGV2ZWxvcGVyLzczZGY3Yjk0LThkNzktZWM0YS1iMjE0LWRlN2NiZmE2OTkxNiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE3OC4yMzUuMTg4LjI1NCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.X1urimcIB_d48VwnD9txf9BrQtNWDIFdE-WFrSyoNp2A7GuILB2T-pCfLPsaH1D0IIeEcs7YDCpkbT9TA2_mBg";
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
