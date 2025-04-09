import React from 'react';

const AboutUs = () => {
  return (
    <div className="text-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#2c3e50', textAlign: 'center', marginBottom: '30px' }}>
        Varför skriva Matte- och Fysikprovet?
      </h1>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#3498db', marginBottom: '15px' }}>Din biljett till tekniska drömutbildningar</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
          Är du i sista året på gymnasiet och drömmer om att plugga på <strong>KTH</strong>, <strong>Chalmers</strong> 
          eller annat tekniskt universitet? <span style={{ color: '#e74c3c', fontWeight: '500' }}>Matte- och Fysikprovet 
          är din golden ticket!</span> Precis som högskoleprovet – men skräddarsytt för tekniska ämnen.
        </p>

        <div style={{ padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ color: '#16a085', marginBottom: '15px' }}>Varför detta prov är unikt:</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}>Hamna i en <strong>separat urvalsgrupp</strong> – konkurrera inte med HP-resultat</li>
            <li style={{ marginBottom: '10px' }}>Används för antagning till <strong>KTH:s mest eftertraktade program</strong>:
              <ul style={{ listStyleType: 'circle', paddingLeft: '25px', marginTop: '8px' }}>
                <li>Teknisk fysik (upp till 33% av platserna)</li>
                <li>Teknisk matematik</li>
                <li>Elektroteknik/Maskinteknik</li>
              </ul>
            </li>
            <li style={{ marginBottom: '10px' }}>Chalmers-program som kräver provet:
              <ul style={{ listStyleType: 'circle', paddingLeft: '25px', marginTop: '8px' }}>
                <li>Arkitektur och teknik</li>
                <li>Automation och mekatronik</li>
                <li>Teknisk fysik/kemi</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#3498db', marginBottom: '15px' }}>Hur funkar det?</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
          <span style={{ fontWeight: '500' }}>Godkänt resultat = Garanterat intag</span> på många program. 
          På Chalmers räcker det ofta att bara <strong>klara provet</strong> för att bli antagen – 
          ingen tävling om högsta poäng!
        </p>
        
        <div style={{ borderLeft: '4px solid #2980b9', paddingLeft: '15px', margin: '20px 0' }}>
          <p style={{ fontStyle: 'italic', color: '#7f8c8d' }}>
            "Många av våra studenter kom in enbart via Mattefysikprovet – 
            det är en unik chans att visa dina tekniska kunskaper direkt."
          </p>
        </div>
      </section>

      <section>
        <h2 style={{ color: '#3498db', marginBottom: '15px' }}>Redo för utmaningen?</h2>
        <p style={{ lineHeight: '1.6' }}>
          Visst låter det lockande? Men kom ihåg – detta är ett <strong>kvalificerat prov</strong> som kräver 
          seriös förberedelse. Hos oss på Mattefysikprep får du:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '15px' }}>
          <li style={{ marginBottom: '10px' }}>Komplett provträning med tidigare års frågor</li>
          <li style={{ marginBottom: '10px' }}>Expertutvecklade lösningsstrategier</li>
          <li style={{ marginBottom: '10px' }}>Statistik och målinriktad feedback</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;