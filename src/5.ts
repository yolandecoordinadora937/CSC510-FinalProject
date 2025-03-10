import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.example.com/data");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {data && <h1>{data.title}</h1>}
    </div>
  );
}
