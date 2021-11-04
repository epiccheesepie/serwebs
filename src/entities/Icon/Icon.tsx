import { FC } from 'react';

import css from './Icon.module.scss';
import { IconType, iconTypeToSvg } from './types';

interface Props {
    type: IconType;
    background?: string;
}

export const Icon: FC<Props> & {
    Type: typeof IconType
} = (props) => {
    const { type } = props;
    const srcSvg = iconTypeToSvg[type];

    return (
        <div className={css.icon}>
            <img src={srcSvg} alt="icon" />
        </div>
    );
}

Icon.Type = IconType;
