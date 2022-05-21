import { MicroCMS } from 'microcms-lib';
import type { EndPoints } from './types/response';

export const client = new MicroCMS<EndPoints>({
  service: process.env.SERVICE,
  apiKey: process.env.API_KEY,
});
