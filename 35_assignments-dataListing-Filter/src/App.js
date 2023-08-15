import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([
    { id: 1, name: 'Alice', age: 28, country: 'USA' },
    { id: 2, name: 'Bob', age: 32, country: 'Canada' },
    { id: 3, name: 'Carol', age: 25, country: 'UK' },
    { id: 4, name: 'David', age: 40, country: 'Australia' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Data Listing, Filtering, and Mapping</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
