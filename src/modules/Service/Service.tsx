import clsx from 'clsx';
import { FC } from 'react';

import css from './Service.module.scss';

interface Props {
    logoImgSrc: string;
    background: string;
    src: string;
    recommendation: boolean;
    common: boolean;
}

export const Service: FC<Props> = (props) => {
    const { logoImgSrc, background, recommendation, common } = props;

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
                        <div className={css.tag}>
                            <span>Разработчику</span>
                        </div>
                        <div className={css.tag}>
                            <span>Онлайн кинотеатр</span>
                        </div>
                        <div className={css.tag}>
                            <span>Онлайн кинотеатр</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
