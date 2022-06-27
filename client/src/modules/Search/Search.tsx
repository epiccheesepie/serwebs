import { observer } from 'mobx-react';
import { FC, FormEventHandler } from 'react';

import { useInject } from '../../hooks';
import css from './Search.module.scss';
import searchIcon from './Search.svg';
import { SearchViewModel } from './SearchViewModel';

export const Search: FC = observer(() => {
    const viewModel = useInject(SearchViewModel);

    const handleChange: FormEventHandler<HTMLInputElement> = (e) => viewModel.setSearchQuery(e.currentTarget.value);

    return (
        <div className={css.wrapper}>
            <div className={css.searchIcon}>
                <img src={searchIcon} alt="searchIcon" />
            </div>
            <input placeholder="Онлайн кинотеатр, социальная сеть..." className={css.search} type="text" onChange={handleChange} value={viewModel.searchQuery} />
        </div>
    );
})
