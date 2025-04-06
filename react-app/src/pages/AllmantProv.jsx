import React, { useEffect } from 'react';
import './AllmantProv.css';

const AllmantProv = () => {
  useEffect(() => {
    document.title = "Allmänt om matematikdelen";
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
      <h1 className="title">Allmänt om matematikdelen</h1>
      
      <div className="description">
        <p>
          Mattedelen av mattefysikprovet består av totalt 30 frågor och är utformat för att genomföras på 3 timmar. 
          Frågorna är främst formulerade för att vara lösbara med matematiken från matte 1-4, men på senare prov har 
          även mer material från matte 5 också inkorpererats. Fördelningen av uppgifterna är som följer:
        </p>
        <p>
          <strong>Del A:</strong> Här ska du välja rätt svar från ett antal alternativ. Det finns 20 sådana uppgifter, 
          och varje uppgift är värd 1 poäng.<br/>
          <strong>Del B:</strong> I denna del ska du ge ett kortfattat svar på varje uppgift utan svarsalternativ. 
          Det finns 10 uppgifter av denna typ, och varje uppgift är värd 2 poäng.<br/>
          <strong>Del C:</strong> Denna del består av en uppgift som kräver en fullständig lösning. 
          Denna uppgift är värd 5 poäng.
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