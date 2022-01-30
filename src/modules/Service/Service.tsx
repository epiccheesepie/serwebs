import clsx from 'clsx';
import { FC } from 'react';

import { Category } from '../../models';
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
    const { logo, background, tags, recommendation, gold } = props;

    return (
        <div className={css.wrapper} style={{ background }}>
            <div className={css.content}>
                <img className={css.logo} src={logo} alt='ServiceLogo' />
                <div className={css.black}>
                    <div className={css.tagsWrapper}>
                        {recommendation && (
                            <div className={clsx(css.tag, css.tagGreen)}>
                                <span>Рекомендация</span>
                            </div>
                        )}
                        {gold && (
                            <div className={clsx(css.tag, css.tagGold)}>
                                <span>Gold</span>
                            </div>
                        )}
                        {tags.map(tag => {
                            return (
                            <div key={tag.id} className={css.tag}>
                                <span>{tag.name}</span>
                            </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
