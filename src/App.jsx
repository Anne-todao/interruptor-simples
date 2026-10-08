import { useState } from 'react';

function App() {
  const [ligado, setLigado] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>O sistema está: {ligado ? "ON" : "OFF"}</h2>

      <button 
        onClick={() => setLigado(!ligado)}
        style={{
          backgroundColor: ligado ? 'green' : 'red',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        {ligado ? "Desligar" : "Ligar"}
      </button>
    </div>
  );
}
export default App;