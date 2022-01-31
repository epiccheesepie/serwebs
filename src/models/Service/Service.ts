// eslint-disable-next-line import/no-internal-modules
import { CategoryId } from '../Category/CategoryId';
import { IService } from './IService';
import { ServiceId } from './ServiceId';

export class Service {
    // eslint-disable-next-line no-useless-constructor
    public constructor(private readonly dto: IService) {

    }

    public get id(): ServiceId {
        return this.dto.id;
    }

    public get title(): string {
        return this.dto.title;
    }

    public get background(): string {
        return this.dto.background;
    }

    public get tags(): CategoryId[] {
        return this.dto.tags;
    }

    public get recommendation(): boolean {
        return this.dto.recommendations[0] ? this.dto.recommendations[0] : false;
    }

    public get gold(): boolean {
        return this.dto.recommendations[1] ? this.dto.recommendations[1] : false;
    }

    public get src(): string {
        return this.dto.src;
    }

    public get logo(): string {
        return this.dto.logo;
    }

    public get names(): string[] {
        return this.dto.names;
    }
}
