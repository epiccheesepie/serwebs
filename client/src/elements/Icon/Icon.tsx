import { FC } from 'react';

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
        <img src={srcSvg} alt="icon" />
    );
}

Icon.Type = IconType;
