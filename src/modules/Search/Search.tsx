import { observer } from 'mobx-react';
import { FC, FormEventHandler } from 'react';

import css from './Search.module.scss';
import searchIcon from './Search.svg';

interface Props {
    onChange: (query: string) => void;
    value: string;
}

export const Search: FC<Props> = observer((props) => {
    const { onChange, value } = props;

    const handleChange: FormEventHandler<HTMLInputElement> = (e) => onChange(e.currentTarget.value);

    return (
        <div className={css.wrapper}>
            <div className={css.searchIcon}>
                <img src={searchIcon} alt="searchIcon" />
            </div>
            <input placeholder="Онлайн кинотеатр, социальная сеть..." className={css.search} type="text" onChange={handleChange} value={value} />
        </div>
    );
})
