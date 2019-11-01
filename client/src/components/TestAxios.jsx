import React from "react";
import { useAxios } from "../hooks/useAxios";

const TestAxios = () => {
  const [data, setData] = useAxios("data", "http://localhost:5000/api/players");

  return (
    <div>
      {/* {data.map(athlete => (
        <div key={athlete.id}>
          <h2>{athlete.name}</h2>
          <p>{athlete.country}</p>
          <p>
            <em>{athlete.id}</em>
          </p>
        </div>
      ))} */}
    </div>
  );
};

export default TestAxios;
