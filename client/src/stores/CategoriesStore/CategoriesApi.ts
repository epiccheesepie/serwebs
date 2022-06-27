import { injectable } from 'inversify';

@injectable()
export class CategoriesApi {
    public fetchCategories(): Promise<unknown> {
        return fetch('http://45.141.78.69:5000/serwebs/categories', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
         })
            .then(response => response.json())
    }
}
