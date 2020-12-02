import { Permission } from './permission';
import { User } from './user';

export interface Role {
  id: number;
  name: string;
  guard: string;
  createdAt?: number;
  updatedAt?: number;
  users?: User[];
  permissions?: Permission[];
}
