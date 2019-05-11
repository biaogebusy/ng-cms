import { ISize } from './size';

export interface IUser {
  accepted_tos: boolean;
  bio: string;
  first_name: string;
  id: string;
  instagram_username: string;
  last_name: string;
  links: Object;
  location: string;
  name: string;
  portfolio_url: string;
  profile_image: ISize;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  twitter_username: string;
  update_at: Date;
  username: string;
}
