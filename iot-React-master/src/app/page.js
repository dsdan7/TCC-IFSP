'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProgressBar from "@/components/ProgressBar";
import BooleanSquare from '@/components/IsCheckedSquare';

const API = "https://progress-react-api.onrender.com/data"

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '50px' }}>
      <h1>Data from MongoDB</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>LEVEL1</th>
              <th>LEVEL2</th>
              <th>PHASE</th>
              <th>BOMB1_STATUS</th>
              <th>BOMB2_STATUS</th>
              <th>BOMB1_OVERTEMP</th>
              <th>BOMB2_OVERTEMP</th>
              <th>TIME_INPUT</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td><ProgressBar value={item.LEVEL1} /></td>
                <td><ProgressBar value={item.LEVEL2} /></td>
                <td><BooleanSquare value={item.PHASE} /></td>
                <td><BooleanSquare value={item.BOMB1_STATUS} /></td>
                <td><BooleanSquare value={item.BOMB2_STATUS} /></td>
                <td><BooleanSquare value={item.BOMB1_OVERTEMP} /></td>
                <td><BooleanSquare value={item.BOMB2_OVERTEMP} /></td>
                <td>{new Date(item.TIME_INPUT).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
