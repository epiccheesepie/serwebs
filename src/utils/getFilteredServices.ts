// eslint-disable-next-line import/no-unresolved
import { Category, Service } from 'src/models';

export const getFilteredServices = (query: string, categories: ReadonlyArray<Category>, services: ReadonlyArray<Service>): Service[] => {
    const words = query.toLowerCase().trim().split(' ');
    const servicesByName = services.filter(service => {
        return words.every(word => service.names.some(x => x.toLowerCase().indexOf(word, 0) >= 0))
    });

    const queryCategoryIds = categories.filter(category => {
        return words.every(word => category.name.toLowerCase().indexOf(word) >= 0);
    }).map(x => x.id);
    const servicesByCategory = services.filter(service => {
        return queryCategoryIds.some(id => service.tags.includes(id));
    });

    if (servicesByName.length && !servicesByCategory.length) return servicesByName;
    else if (!servicesByName.length && servicesByCategory.length) return servicesByCategory;
    else if (servicesByName.length && servicesByCategory.length) return Array.from(new Set([...servicesByName, ...servicesByCategory]));

    return [];
}
