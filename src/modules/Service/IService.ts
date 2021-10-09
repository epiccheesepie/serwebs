import { DeveloperId } from '../Developer';
import { TagId } from '../Tag';
import { ServiceId } from './ServiceId';

export interface IService {
    id: ServiceId;
    developer: DeveloperId;
    tags: TagId[];
    title: string;
    subtitle: string;
    description: string;
    imgSrc: string;
    logoImgSrc: string;
    background: string;
    viewsCount: number;
    updateDate: Date;
    src: string;
    recommendation: boolean;
    common: boolean;
}
