import axios from "axios";
import { useEffect, useState } from "react";

export default function ResultDisplay() {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    axios
      .get("/api/laptops/")
      .then((res) => {
        setLaptops(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {laptops.map((laptop) => (
        <p key={laptop.id}>
          {laptop.brand} {laptop.model}
        </p>
      ))}
    </div>
  );
}
