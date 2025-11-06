
import React, { useState } from "react";
import LoginPage  from "./pages/login";

 function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <LoginPage />
    </div>
  );
}

export default App;
















// import React, { useEffect, useState } from "react";

// function App() {
//   const [inventaris, setInventaris] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/inventaris")
//       .then((response) => response.json())
//       .then((data) => {
//         setInventaris(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
//       <h1>Daftar Inventaris</h1>
//       {loading ? (
//         <p>Memuat data...</p>
//       ) : (
//         <table
//           border="1"
//           cellPadding="8"
//           style={{ marginTop: "10px", borderCollapse: "collapse" }}
//         >
//           <thead>
//             <tr style={{ backgroundColor: "#f3f3f3" }}>
//               <th>ID</th>
//               <th>Nama Barang</th>
//               <th>Kondisi</th>
//               <th>Jumlah</th>
//             </tr>
//           </thead>
//           <tbody>
//             {inventaris.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.nama_barang}</td>
//                 <td>{item.kondisi}</td>
//                 <td>{item.jumlah}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default App;























