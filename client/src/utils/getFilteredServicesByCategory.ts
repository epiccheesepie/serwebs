// eslint-disable-next-line import/no-unresolved
import { CategoryId, Service } from 'src/models';

export const getFilteredServicesByCategory = (query: string, categoryId: CategoryId, services: ReadonlyArray<Service>): Service[] => {
    const words = query.toLowerCase().trim().split(' ');
    const servicesByName = services
    .filter(service => {
        return words.every(word => service.names.some(x => x.toLowerCase().indexOf(word, 0) >= 0))
    })
    .filter(service => service.tags.includes(categoryId));

    if (servicesByName.length) return servicesByName;

    return [];
}
