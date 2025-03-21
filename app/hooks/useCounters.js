import { useState, useEffect } from "react";
import axios from "axios";

export const useCounters = () => {
  const [counters, setCounters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCounters = async () => {
      try {
        const response = await axios.get(
          "https://oneheart.team/api/counter"
        );
        setCounters(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCounters();
  }, []);

  return { counters, loading, error };
};
