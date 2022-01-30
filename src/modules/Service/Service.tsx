import clsx from 'clsx';
import { FC } from 'react';

import { Tag } from '../../models';
import css from './Service.module.scss';

interface Props {
    logoImgSrc: string;
    background: string;
    src: string;
    recommendation: boolean;
    common: boolean;
    tags: Tag[];
}

export const Service: FC<Props> = (props) => {
    const { logoImgSrc, background, tags, recommendation, common } = props;

    return (
        <div className={css.wrapper} style={{ background }}>
            <div className={css.content}>
                <img className={css.logo} src={logoImgSrc} alt='ServiceLogo' />
                <div className={css.black}>
                    <div className={css.tagsWrapper}>
                        {recommendation && (
                            <div className={clsx(css.tag, css.tagGreen)}>
                                <span>Рекомендация</span>
                            </div>
                        )}
                        {common && (
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
