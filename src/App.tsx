import { useState } from 'react'
import { MapaGuanajuato } from './components/MapaGuanajuato'

function App() {
  const [municipioSeleccionado, setMunicipioSeleccionado] = useState<string | null>(null)

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ textAlign: 'center', padding: '1rem' }}>Apoyos Turísticos Guanajuato</h1>
      <div style={{ flex: 1 }}>
        <MapaGuanajuato
          onSelectMunicipio={setMunicipioSeleccionado}
          municipioSeleccionado={municipioSeleccionado}
        />
      </div>
      {municipioSeleccionado && (
        <p style={{ textAlign: 'center', padding: '1rem' }}>
          Seleccionaste: <strong>{municipioSeleccionado}</strong>
        </p>
      )}
    </div>
  )
}

export default App