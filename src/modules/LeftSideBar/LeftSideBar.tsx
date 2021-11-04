import { FC } from 'react';

import css from './LeftSideBar.module.scss';
import { LeftSideBarItem } from './LeftSideBarItem';

const data = [
    {
        imgSrc: 'https://appstorrent.ru/templates/appstorrent-a5501543bc/assets/img/icons/program/program.svg',
        title: 'Интернет',
        count: 12,
        background: '#ff7139'
    },
    {
        imgSrc: 'https://appstorrent.ru/templates/appstorrent-a5501543bc/assets/img/icons/program/program.svg',
        title: 'Графика',
        count: 24,
        background: '#0060df'
    },
    {
        imgSrc: 'https://appstorrent.ru/templates/appstorrent-a5501543bc/assets/img/icons/program/program.svg',
        title: 'Разработчику',
        count: 440,
        background: '#00b104',
    },
    {
        imgSrc: 'https://appstorrent.ru/templates/appstorrent-a5501543bc/assets/img/icons/program/program.svg',
        title: 'Общение',
        count: 1,
        background: '#6943b7'
    },
    {
        imgSrc: 'https://appstorrent.ru/templates/appstorrent-a5501543bc/assets/img/icons/program/program.svg',
        title: 'Видео',
        count: 1000,
        background: '#ff7139'
    },
    {
        imgSrc: 'https://appstorrent.ru/templates/appstorrent-a5501543bc/assets/img/icons/program/program.svg',
        title: 'Фото',
        count: 1,
        background: '#0060df'
    },
    {
        imgSrc: 'https://appstorrent.ru/templates/appstorrent-a5501543bc/assets/img/icons/program/program.svg',
        title: 'Новости',
        count: 1,
        background: '#00b104',
    },
    {
        imgSrc: 'https://appstorrent.ru/templates/appstorrent-a5501543bc/assets/img/icons/program/program.svg',
        title: 'Туризм',
        count: 1,
        background: '#6943b7'
    },
    {
        imgSrc: 'https://appstorrent.ru/templates/appstorrent-a5501543bc/assets/img/icons/program/program.svg',
        title: 'Музыка',
        count: 1,
        background: '#ff7139'
    },
    {
        imgSrc: 'https://appstorrent.ru/templates/appstorrent-a5501543bc/assets/img/icons/program/program.svg',
        title: 'Авто',
        count: 1,
        background: '#0060df'
    },
    {
        imgSrc: 'https://appstorrent.ru/templates/appstorrent-a5501543bc/assets/img/icons/program/program.svg',
        title: 'Недвижимость',
        count: 1,
        background: '#00b104',
    },
    {
        imgSrc: 'https://appstorrent.ru/templates/appstorrent-a5501543bc/assets/img/icons/program/program.svg',
        title: 'Кино',
        count: 1,
        background: '#6943b7'
    },
    {
        imgSrc: 'https://appstorrent.ru/templates/appstorrent-a5501543bc/assets/img/icons/program/program.svg',
        title: 'Учеба',
        count: 1,
        background: '#ff7139'
    }
];

export const LeftSideBar: FC = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.content}>
                <div className={css.logo}>
                    <img src="/main.png" alt="logo" />
                </div>
                <div className={css.menu}>
                    {data.map((item, index) => (
                        <LeftSideBarItem
                            key={String(index)}
                            title={item.title}
                            count={item.count}
                            background={item.background}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
