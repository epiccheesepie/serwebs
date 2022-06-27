/* eslint-disable import/no-internal-modules */
import Auto from './icons/Auto.svg';
import All from './icons/All.svg';
import Developer from './icons/Developer.svg';
import Foto from './icons/Foto.svg';
import Game from './icons/Game.svg';
import Graphics from './icons/Graphics.svg';
import Realty from './icons/Realty.svg';
import Services from './icons/Services.svg';
import Movie from './icons/Movie.svg';
import Music from './icons/Music.svg';
import News from './icons/News.svg';
import Society from './icons/Society.svg';
import Study from './icons/Study.svg';
import Travel from './icons/Travel.svg';
import Video from './icons/Video.svg';
import Finance from './icons/Finance.svg';

export enum IconType {
    ALL = 1,
    NEWS,
    SOCIETY,
    SERVICES,
    DEVELOPER,
    STUDY,
    MOVIE,
    MUSIC,
    GAME,
    GRAPHICS,
    FOTO,
    VIDEO,
    TRAVEL,
    AUTO,
    REALTY,
    FINANCE
}

export const iconTypeToSvg: Record<IconType, string> = {
    [IconType.ALL]: All,
    [IconType.NEWS]: News,
    [IconType.SOCIETY]: Society,
    [IconType.SERVICES]: Services,
    [IconType.DEVELOPER]: Developer,
    [IconType.STUDY]: Study,
    [IconType.MOVIE]: Movie,
    [IconType.MUSIC]: Music,
    [IconType.GAME]: Game,
    [IconType.GRAPHICS]: Graphics,
    [IconType.FOTO]: Foto,
    [IconType.VIDEO]: Video,
    [IconType.TRAVEL]: Travel,
    [IconType.AUTO]: Auto,
    [IconType.REALTY]: Realty,
    [IconType.FINANCE]: Finance
}
