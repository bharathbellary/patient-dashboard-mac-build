import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbwMIq-UY-FE50uMGyG5HO8Z1HeylCdA8JZkGLabX19iTSxGxNrUdxIEK1CDx7qGrsM/exec") // replace with your actual URL
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  const handleConnect = (row) => {
    alert(`Connect clicked for ${row.Name}`);
    // Later: trigger scheduling or notification
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🩺 Patient Dashboard</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Meet Link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.Name || "N/A"}</td>
              <td>{row.Email || "N/A"}</td>
              <td>{row.Date || "N/A"}</td>
              <td>
                {row["Meet Link"] ? (
                  <a href={row["Meet Link"]} target="_blank" rel="noopener noreferrer">
                    Join
                  </a>
                ) : (
                  "No Link"
                )}
              </td>
              <td>
                <button onClick={() => handleConnect(row)}>Connect</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
