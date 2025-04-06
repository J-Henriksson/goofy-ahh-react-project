import React, { useEffect } from 'react';
import './AllmantProv.css';

const AllmantProv = () => {
  useEffect(() => {
    document.title = "Allmänt om MATEMATIK delen";
  }, []);

  const categories = [
    { name: 'Algebraisk uttrycksförenkling' },
    { name: 'Absolutbelopp och rotuttryck' },
    { name: 'Olikheter och ekvationer' },
    { name: 'Andragradsekv. och polynom' },
    { name: 'Logaritmer och exponenter' },
    { name: 'Trigonometri' },
    { name: 'Geometri' },
    { name: 'Analys (derivata och integraler)' },
    { name: 'Annat' }
  ];

  return (
    <div className="container">
      <h1 className="title">Allmänt om matematikdelen delen</h1>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Kategori</th>
              <th>2024</th>
              <th>2023</th>
              <th>2022</th>
              <th>2021</th>
              <th>2019</th>
              <th className="total-column">Total</th>
              <th className="percentage-column">Andel</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index}>
                <td>{category.name}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="total-column"></td>
                <td className="percentage-column"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllmantProv;