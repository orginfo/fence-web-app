import { ApiClient } from './apiclient';
import { ApiUser } from './apiuser';

export class ApiProject {
  id: number;
  nr: string;
  contract_date: string;
  install_date: string;
  address: string;
  comment: string;
  user: ApiUser;
  client: ApiClient;
}
