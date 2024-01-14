export interface Product {
  id: number;
  slug: string;
  publishedAt: string;
  title: string;
  description: string;
  category: string;
  price: number;
  feature_image: string;
  slides_images: string[];
  preview_url: string;
  overviews: Overview;
  pages: Pages;
}

export interface Overview {
  title: string;
  key_features: string[]; // Update to an array of strings
  sub_title: string;
}

export interface Pages {
  total_pages: number;
  cms_collection: number;
}
