import React, { useEffect } from 'react';
import './AllmantProv.css';

const AllmantProv = () => {
  useEffect(() => {
    document.title = "Allmänt om provet";
  }, []);

  const mathCategories = [
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

  const physicsCategories = [
    { name: 'Mekanik' },
    { name: 'Elektromagnetism och optik' },
    { name: 'Ellära' },
    { name: 'Vågrörelse' },
    { name: 'Kvantfysik' },
    { name: 'Speciell relativitetsteori' },
    { name: 'Termodynamik' },
    { name: 'Annat' }
  ];

  return (
    <div className="container">
      <h1 className="title">Allmänt om provet</h1>
      
      {/* Matematikdelen */}
      <div className="section">
        <h2 className="subtitle">Matematikdelen</h2>
        <div className="description">
          <p>
            Mattedelen består av 30 frågor och genomförs på 3 timmar. 
            Fördelningen av uppgifterna är:
          </p>
          <p>
            <strong>Del A:</strong> 20 flervalsfrågor (1 p/uppg)<br/>
            <strong>Del B:</strong> 10 kortsvarsfrågor (2 p/uppg)<br/>
            <strong>Del C:</strong> 1 utredande uppgift (5 p)
          </p>
        </div>

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
              {mathCategories.map((category, index) => (
                <tr key={`math-${index}`}>
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

      {/* Fysikdelen */}
      <div className="section">
        <h2 className="subtitle">Fysikdelen</h2>
        <div className="description">
          <p>
            Fysikdelen består av 20 frågor och genomförs på 2 timmar.
            Fördelningen av uppgifterna är:
          </p>
          <p>
            <strong>Del A:</strong> 13 flervalsfrågor (1 p/uppg)<br/>
            <strong>Del B:</strong> 6 kortsvarsfrågor (2 p/uppg)<br/>
            <strong>Del C:</strong> 1 problemlösning (5 p)
          </p>
        </div>

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
              {physicsCategories.map((category, index) => (
                <tr key={`physics-${index}`}>
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
    </div>
  );
};

export default AllmantProv;