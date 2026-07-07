import type { MunicipioAgregado } from '../types/apoyo'

export const MOCK_MUNICIPIOS: Map<string, MunicipioAgregado> = new Map([
  ['León', {
    nombre: 'León',
    totalApoyado: 2691199,
    numeroProyectos: 3,
    conceptos: { 'Hospedaje': 1200000, 'Transporte': 891199, 'Alimentos': 600000 },
    motivos: { 'Cultural': 2, 'Deportivo': 1 },
  }],
  ['Guanajuato', {
    nombre: 'Guanajuato',
    totalApoyado: 1850000,
    numeroProyectos: 2,
    conceptos: { 'Hospedaje': 950000, 'Transporte': 900000 },
    motivos: { 'Cultural': 2 },
  }],
  ['San Miguel de Allende', {
    nombre: 'San Miguel de Allende',
    totalApoyado: 3200000,
    numeroProyectos: 4,
    conceptos: { 'Hospedaje': 2000000, 'Alimentos': 1200000 },
    motivos: { 'Cultural': 3, 'Enológico': 1 },
  }],
  ['Celaya', {
    nombre: 'Celaya',
    totalApoyado: 486939.44,
    numeroProyectos: 1,
    conceptos: { 'Transporte': 486939.44 },
    motivos: { 'Deportivo': 1 },
  }],
])