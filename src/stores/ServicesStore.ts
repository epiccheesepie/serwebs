import { injectable } from 'inversify';
import { computed, makeObservable, observable } from 'mobx';
// eslint-disable-next-line import/no-unresolved
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
}
