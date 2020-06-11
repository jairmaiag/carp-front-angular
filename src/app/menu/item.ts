export interface Item {
  id: number;
  texto: string;
  link: string;
  subIntens: Array<Item>;
}
