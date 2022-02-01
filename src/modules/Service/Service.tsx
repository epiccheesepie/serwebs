import { FC } from 'react';

import { Category } from '../../models';
import { Tag } from '../Tag';
import css from './Service.module.scss';

interface Props {
    logo: string;
    background: string;
    src: string;
    recommendation: boolean;
    gold: boolean;
    tags: Category[];
}

export const Service: FC<Props> = (props) => {
    const { logo, background, tags, recommendation, gold, src } = props;

    return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a href={src} target="_blank" className={css.wrapper} style={{ background }}>
            <div className={css.content}>
                <img className={css.logo} src={logo} alt='ServiceLogo' />
                <div className={css.black}>
                    <div className={css.tagsWrapper}>
                        {recommendation && <Tag className={css.tagGreen} name='Рекомендация' />}
                        {gold && <Tag className={css.tagGold} name='Gold' />}
                        {tags.map(tag => {
                            return (
                                <Tag key={tag.id} name={tag.name} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </a>
    );
}
