import { CategoryId } from '../Category';
import { ServiceId } from './ServiceId';

export interface IService {
    id: ServiceId;
    tags: CategoryId[];
    title: string;
    background: string;
    logo: string;
    src: string;
    recommendations: boolean[];
    names: string[];
}
