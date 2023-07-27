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
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjY3OGIxYmRlLTUzOGEtNGI0Ni1iMjY0LTQzYTllZTRkNTQ2MiIsImlhdCI6MTY5MDM4NzMyMCwic3ViIjoiZGV2ZWxvcGVyLzczZGY3Yjk0LThkNzktZWM0YS1iMjE0LWRlN2NiZmE2OTkxNiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE3OC4yMzUuMTg4LjI1NCIsIjM0LjE0MS41NS4yNTAiXSwidHlwZSI6ImNsaWVudCJ9XX0.bs21JsEt0U7yRD_x4WGTJDPPTluH-j1vJpOlEbiUhjeC2_R84Jth5-1Wlj9pbrrHSjHPlA7UlIpZPJFKbo7G_w";
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
