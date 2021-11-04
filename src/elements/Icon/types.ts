/* eslint-disable import/no-internal-modules */
import Developer from './icons/Developer.svg';
import Graphics from './icons/Graphics.svg';
import Internet from './icons/Internet.svg';

export enum IconType {
    INTERNET = 'INTERNET',
    GRAPHICS = 'GRAPHICS',
    DEVELOPER = 'DEVELOPER'
}

export const iconTypeToSvg: Record<IconType, string> = {
    [IconType.INTERNET]: Internet,
    [IconType.GRAPHICS]: Graphics,
    [IconType.DEVELOPER]: Developer
}
