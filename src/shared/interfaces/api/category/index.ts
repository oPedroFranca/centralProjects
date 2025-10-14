export interface ICategoryPost {
  name: string;
  description?: string;
}

export interface ICategoryUpdate {
  id: string;
  name: string;
  description?: string;
}

export interface ICategoryResponse {
  success: boolean;
  message: string;
}

export interface ICategoryResponse {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
}
