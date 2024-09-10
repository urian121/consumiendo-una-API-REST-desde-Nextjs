"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "../styles/api.css";

function DataPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api");
      const result = await response.json();
      console.log(result);

      setData(result.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <ul className="user-list">
        {data.map((item) => (
          <li key={item.id} className="user-item">
            <div className="user-avatar">
              <Image src={item.avatar} alt={`${item.first_name} ${item.last_name}`} width={50} height={50} />
            </div>
            <div className="user-info">
              <h3 className="user-name">
                {item.first_name} {item.last_name}
              </h3>
              <p className="user-email">{item.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataPage;