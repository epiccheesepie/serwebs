import { TagId } from '../Tag';
import { ServiceId } from './ServiceId';

export interface IService {
    id: ServiceId;
    tags: TagId[];
    title: string;
    background: string;
    logo: string;
    src: string;
    recommendations: boolean[];
}
