// Enum 타입 - 책 장르
export enum Genre {
  Fiction = 'Fiction',
  NonFiction = 'NonFiction',
  Mystery = 'Mystery',
  Biography = 'Biography',
  Romance = 'Romance',
  Novel = 'Novel',
  Scientific = 'Scientific',
}

// Book 인터페이스 정의
export interface Book {
  id: number;
  title: string;
  description: string;
  read: boolean;
  genre: Genre;
  coverImage: string;
  review: string;
}
