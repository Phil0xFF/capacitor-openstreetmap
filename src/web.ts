import { WebPlugin } from '@capacitor/core';

import type { CapacitorOpenstreetmapPlugin } from './definitions';

export class CapacitorOpenstreetmapWeb
  extends WebPlugin
  implements CapacitorOpenstreetmapPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
