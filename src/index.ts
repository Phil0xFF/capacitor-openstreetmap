import { registerPlugin } from '@capacitor/core';

import type { CapacitorOpenstreetmapPlugin } from './definitions';

const CapacitorOpenstreetmap = registerPlugin<CapacitorOpenstreetmapPlugin>(
  'CapacitorOpenstreetmap',
  {
    web: () => import('./web').then(m => new m.CapacitorOpenstreetmapWeb()),
  },
);

export * from './definitions';
export { CapacitorOpenstreetmap };
