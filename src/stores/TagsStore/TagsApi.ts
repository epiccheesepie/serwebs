import { injectable } from 'inversify';

@injectable()
export class TagsApi {
    public fetchTags(): Promise<unknown> {
        return fetch('http://localhost:3000/tags.json')
            .then(response => response.json())
    }
}
