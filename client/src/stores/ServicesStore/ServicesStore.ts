/* eslint-disable import/no-unresolved */
import { injectable } from 'inversify';
import { computed, makeObservable, observable } from 'mobx';
import { CategoryId } from 'src/models/Category';
import { IService, Service, ServiceId } from 'src/models/Service';

import { ServicesApi } from './ServicesApi';

@injectable()
export class ServicesStore {
    @observable.ref private _services: Map<ServiceId, Service> = new Map<ServiceId, Service>();

    @observable private _ready: boolean = false;

    public constructor(
        private readonly api: ServicesApi
    ) {
        makeObservable(this);

        // eslint-disable-next-line no-void
        void this.load();
    }

    private async load(): Promise<void> {
        const servicesDto = await this.api.fetchServices() as IService[];
        const services = new Map<ServiceId, Service>();
        servicesDto.forEach(dto => {
            const service = new Service(dto);
            services.set(service.id, service);
        });

        this._services = services;
        this._ready = true;
    }

    @computed
    public get ready(): boolean {
        return this._ready;
    }

    @computed
    public get services(): ReadonlyArray<Service> {
        return Array.from(this._services.values()).sort(sortServices);
    }

    public getServices(id: CategoryId): Service[] {
        return this.services.filter(x => {
            return x.tags.includes(id);
        });
    }
}

function sortServices(a: Service, b: Service) {
    return b.priority - a.priority;
}
