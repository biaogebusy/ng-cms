mport { IPhotoUrl } from './photoUrl';
import { IUser } from './user';

export interface IPhoto {
    categories: Array<any>,
    color: string,
    created_at: Date,
    current_user_collections: Array<any>,
    description: string,
    exif: Object,
    height: number,
    id: string,
    like_by_user: boolean,
    likes: number,
    links: Object,
    slug: string,
    sponsored: boolean,
    sponsored_by: string,
    sponsored_impressions_id: string,
    updated_at: Date,
    urls: IPhotoUrl,
    user: IUser,
    views: number,
    width: number
}