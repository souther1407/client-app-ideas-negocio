import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const useQuery = () => {
  const location = useLocation();
  const [queries, setQueries] = useState({});

  useState(() => {
    if (!location.search) return;
    const bufferQueries = {};
    const queriesArray = location.search.slice(1).split("&"); // ["user=dasfas","email=fgjaoigsa@gaf.com"]
    for (let query of queriesArray) {
      const queryArray = query.split("=");
      const key = queryArray[0];
      const value = queryArray[1];
      bufferQueries[key] = value;
    }
    setQueries((prev) => ({ ...bufferQueries }));
  }, []);

  return queries;
};
