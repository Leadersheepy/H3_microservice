export interface Livre {
  id: number;
  title: string;
  author: string;
  summary: string;
  cover: string;
  isLent: boolean;
  lentTo: string;
  lentDate: Date;
  lentReturnDate: Date;
}
