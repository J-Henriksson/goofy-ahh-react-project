import React from 'react';
import styles from './ViewPastTests.module.css';

const tests = [
  {
    id: 1,
    termin: "2024",
    title: "Matte",
    testPdf: "../public/pdfs/matte2024.pdf",
    solutionPdf: "/public/pdfs/solution1.pdf",
  },
  {
    id: 2,
    termin: "2024",
    title: "Fysik",
    testPdf: "../public/pdfs/matte2024.pdf",
    solutionPdf: "/public/pdfs/solution2.pdf",
  }
];

const ViewPastTests = () => {
  return (
    <div className={styles.container}>
      <table className={styles.testTable}>
        <thead>
          <tr>
            <th>År</th>
            <th>Test</th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test) => (
            <tr key={test.id}>
              <td>{test.termin}</td>
              <td>
                <a
                  href={test.testPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.pdfLink}
                >
                  {test.title}
                </a>
              </td>
              <td>
                <a
                  href={test.solutionPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.pdfLink}
                >
                  {test.title} Solution
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewPastTests;

