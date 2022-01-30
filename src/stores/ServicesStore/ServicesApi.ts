import { injectable } from 'inversify';

@injectable()
export class ServicesApi {
    public fetchServices(): Promise<unknown> {
        return fetch('http://localhost:3000/db.json')
            .then(response => response.json())
    }
}
