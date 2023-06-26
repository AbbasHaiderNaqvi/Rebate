import styles from './Cover.module.scss';
import React, {useEffect, useState} from 'react';


interface CoverProps {
    imageUrl: string;
    imageUrlMobile: string;
}

export const Cover: React.FC<CoverProps> = ({imageUrl, imageUrlMobile}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className={styles['container']}>
            <img alt={'cover'} className={`${styles['cover']}`} src={isMobile ? imageUrlMobile : imageUrl}/>

        </div>
    );
}
