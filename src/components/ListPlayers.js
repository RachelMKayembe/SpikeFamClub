import React, { useState } from 'react';
import './Form1.css';

export default function EditableList() {
  const [listData, setListData] = useState([
    { id: "Player", label1: "", label2: "", label3: "" },
  ]);

  const handleAddRow = () => {
    if (listData.length < 5) {
      const newRow = { id: Date.now(), label1: "", label2: "", label3: "" };
      setListData([...listData, newRow]);
    }
  };

  const handleLabelChange = (id, labelNumber, value) => {
    const updatedData = listData.map((item) =>
      item.id === id ? { ...item, [`label${labelNumber}`]: value } : item
    );
    setListData(updatedData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(listData);
  };

  return (
    <div className='register'>
      <h2>Editable List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Age</th>
            <th>Jersey Number</th>
          </tr>
        </thead>
        <tbody>
          {listData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <input
                  type="text"
                  value={item.label1}
                  onChange={(e) => handleLabelChange(item.id, 1, e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.label2}
                  onChange={(e) => handleLabelChange(item.id, 2, e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.label3}
                  onChange={(e) => handleLabelChange(item.id, 3, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button type="button" onClick={handleAddRow}>
          Add Row
        </button>
        <button className='btn' style={{ marginTop: '20px' }} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}