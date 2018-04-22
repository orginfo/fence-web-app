import { ApiProject } from './apiproject';

export class ApiResponse {
  Code: number;
  Message: string;
  ID: number;
  Result: ApiProject[];
}
