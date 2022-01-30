import { injectable } from 'inversify';

@injectable()
export class CategoriesApi {
    public fetchCategories(): Promise<unknown> {
        return fetch('http://localhost:3000/tags.json')
            .then(response => response.json())
    }
}
