import { useState, useEffect } from "react";

const useFetch = (fetchUrl) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.json());
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [fetchUrl]);

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
