import { schema } from 'normalizr';

export const user = new schema.Entity('users');
export const article = new schema.Entity('articles', {
  user,
});
