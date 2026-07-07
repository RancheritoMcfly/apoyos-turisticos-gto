export interface ApoyoNormalizado {
  folio: string
  proyecto: string
  beneficiario: string
  tipoProyecto: string
  sesion: string
  fecha: string
  municipios: string[]
  esMultidestino: boolean
  concepto: string
  motivos: string[]
  monto: number
  convenio: string | null
}

export interface MunicipioAgregado {
  nombre: string
  totalApoyado: number
  numeroProyectos: number
  conceptos: Record<string, number>
  motivos: Record<string, number>
}