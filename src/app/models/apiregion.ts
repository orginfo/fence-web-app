export interface ApiRegion {
  id: number;
  description: string;
  region_type_id: number; //TODO: нет такого поля.
}

export const REGIONS: ApiRegion[] = [
  { id: 1, description: "описание 1", region_type_id: 1 },
  { id: 2, description: "описание 2", region_type_id: 1 },
  { id: 3, description: "", region_type_id: 2 },
  { id: 4, description: "описание 4", region_type_id: 3 }
];
