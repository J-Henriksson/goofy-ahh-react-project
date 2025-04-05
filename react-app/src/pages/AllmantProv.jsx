import React from 'react';

const AllmantProv = () => {
  return (
    <div style={{ padding: '20px', marginTop: '60px', maxWidth: '1200px', overflowX: 'auto' }}>
      <h1>Statistisk Översikt över Matematikproven 2019-2024</h1>
      
      <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Kategori</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>2024</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>2023</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>2022</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>2021</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>2019</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>Totalt</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>Andel</th>
          </tr>
        </thead>
        <tbody>
          {/* Rad för Algebra */}
          <tr>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>1. Algebra & Uttrycksförenkling</td>
            <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>5</td>
            <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>4</td>
            <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>6</td>
            <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>5</td>
            <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>6</td>
            <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>26</td>
            <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>17%</td>
          </tr>

          {/* Rad för Analys */}
          <tr style={{ backgroundColor: '#f9f9f9' }}>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>8. Analys</td>
            <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>2</td>
            <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>2</td>
            <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>2</td>
            <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>2</td>
            <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>2</td>
            <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>10</td>
            <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>7%</td>
          </tr>

          {/* Ytterligare rader kan läggas till här enligt samma mönster */}
          
        </tbody>
      </table>

      <div style={{ marginTop: '20px', color: '#666' }}>
        <p>* Andelarna beräknas baserat på totala antalet kategoripoäng (där en fråga kan tillhöra flera kategorier).</p>
      </div>
    </div>
  );
};

export default AllmantProv;