export type Ad = {
  id: number;
  title: string;
  description: string;
  owner: string;
  price: number;
  pictureUrl: string;
  category: Category;
  location: string;
  createdAt: Date;
  updatedAt: Date | null;
  tags: Tag[] | [];
};

export type Category = {
  id: number;
  name: string;
};

export type Tag = {
  id: number;
  label: string;
};

export type CreateAdFormData = {
  title: string;
  description: string;
  owner: string;
  price: number;
  pictureUrl: string;
  location: string;
  category: number;
  tags: number[];
};

export type UpdateAdFormData = {
  title: string;
  description: string;
  owner: string;
  price: number;
  pictureUrl: string;
  location: string;
  category: number;
  tags: number[];
};
