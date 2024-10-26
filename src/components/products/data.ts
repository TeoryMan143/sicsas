export const productTypes = [
  {
    value: 'all',
    label: 'Todos',
  },
  {
    value: 'res',
    label: 'Protección respiratoria',
  },
  {
    value: 'vis',
    label: 'Protección visual',
  },
  {
    value: 'aud',
    label: 'Protección auditiva',
  },
  {
    value: 'head',
    label: 'Protección cabeza y facial',
  },
  {
    value: 'hand',
    label: 'Protección manos',
  },
  {
    value: 'high',
    label: 'Protección altura',
  },
  {
    value: 'feet',
    label: 'Protección pies',
  },
  {
    value: 'body',
    label: 'Protección corporal',
  },
  {
    value: 'sign',
    label: 'Señalización',
  },
  {
    value: 'emer',
    label: 'Brigadas, botiquines y elementos de emergencia',
  },
] as const;

export type ProductValues = (typeof productTypes)[number]['value'];
export type ProductTitles = (typeof productTypes)[number]['label'];
