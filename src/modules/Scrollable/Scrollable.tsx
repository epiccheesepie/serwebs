import clsx from 'clsx';
import { FC, useEffect, useRef } from 'react';

import css from './Scrollable.module.scss';

interface Props {
    className?: string;
}

export const Scrollable: FC<Props> = (props) => {
    const { className, children } = props;

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;

        const onScroll = (e: Event) => {
            e.preventDefault();
            container?.scrollTo({
                left: container.scrollLeft,
                behavior: 'smooth'
            })
        }

        container?.addEventListener('scroll', onScroll);
        return () => container?.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className={css.wrapper}>
            <div ref={containerRef} className={clsx(css.scrollable, className)}>
                {children}
            </div>
        </div>
    );
}
