import { injectable } from 'inversify';

@injectable()
export class ServicesApi {
    public fetchServices(): Promise<unknown> {
        return fetch('http://45.141.78.69:5000/serwebs/services', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
         })
            .then(response => response.json())
    }
}
