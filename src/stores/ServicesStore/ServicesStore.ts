/* eslint-disable import/no-unresolved */
import { injectable } from 'inversify';
import { computed, makeObservable, observable } from 'mobx';
import { CategoryId } from 'src/models/Category';
import { IService, Service, ServiceId } from 'src/models/Service';

import { ServicesApi } from './ServicesApi';

@injectable()
export class ServicesStore {
    @observable.ref private _services: Map<ServiceId, Service> = new Map<ServiceId, Service>();

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
    }

    @computed
    public get services(): ReadonlyArray<Service> {
        return Array.from(this._services.values());
    }

    public getServices(ids: CategoryId[]): Service[] {
        return this.services.filter(x => {
            return ids.every(id => x.tags.includes(id));
        });
    }
}
