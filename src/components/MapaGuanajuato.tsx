import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { useState } from 'react'
import { MOCK_MUNICIPIOS } from '../data/mockData'

const GEO_URL = `${import.meta.env.BASE_URL}geo/guanajuato-municipios.json`

interface Props {
  onSelectMunicipio: (nombre: string) => void
  municipioSeleccionado: string | null
}

export function MapaGuanajuato({ onSelectMunicipio, municipioSeleccionado }: Props) {
  const [hover, setHover] = useState<string | null>(null)

  const maxMonto = Math.max(...Array.from(MOCK_MUNICIPIOS.values()).map((m) => m.totalApoyado), 1)

  function colorPorMonto(nombre: string) {
    const agg = MOCK_MUNICIPIOS.get(nombre)
    if (!agg) return '#E5E7EB'
    const intensidad = agg.totalApoyado / maxMonto
    const opacidad = 0.25 + intensidad * 0.75
    return `rgba(232, 93, 117, ${opacidad})`
  }

  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ center: [-101.1, 21.0], scale: 9000 }}
      style={{ width: '100%', height: '100%' }}
    >
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const nombre = geo.properties.mun_name
            const activo = municipioSeleccionado === nombre
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => setHover(nombre)}
                onMouseLeave={() => setHover(null)}
                onClick={() => onSelectMunicipio(nombre)}
                style={{
                  default: {
                    fill: colorPorMonto(nombre),
                    stroke: '#1B3A4B',
                    strokeWidth: activo ? 1.5 : 0.5,
                    outline: 'none',
                    transition: 'fill 0.3s ease',
                  },
                  hover: {
                    fill: '#F2C14E',
                    outline: 'none',
                    cursor: 'pointer',
                  },
                  pressed: { outline: 'none' },
                }}
              />
            )
          })
        }
      </Geographies>
    </ComposableMap>
  )
}