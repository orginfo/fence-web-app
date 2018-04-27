export interface ApiRegionType {
  id: number;
  user_name: string;
  code_name: string;
}

export const REGION_TYPES: ApiRegionType[] = [
  { id: 1, user_name: "Классический забор", code_name: "code_name1" },
  { id: 2, user_name: "Новый забор", code_name: "code_name1" },
  { id: 3, user_name: "Ультра современный забор", code_name: "code_name1" }
];
