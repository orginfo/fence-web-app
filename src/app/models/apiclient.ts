export class ApiClient {
  id: number;
  name: string;
  phone: string;
  comment: string;
}

export const CLIENTS: ApiClient[] = [
  { id: 1, name: "Иванов Иван Иванович", phone: "+79131111111", comment: "" },
  { id: 2, name: "Петров Петр Петрович", phone: "+79132222222", comment: "" },
  { id: 3, name: "Сидоров Сидр Сидорович", phone: "+79133333333", comment: "" },
  { id: 3, name: "Иванов Иванов Ольгович", phone: "+79133333333", comment: "" }
];
