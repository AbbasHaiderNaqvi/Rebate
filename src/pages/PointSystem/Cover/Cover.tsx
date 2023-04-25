import styles from './Cover.module.scss';
import React from 'react';
import coverImage from '../../../assets/images/point_system_cover.jpeg';


export const Cover: React.FC = () => {
    return (
        <div className={styles['container']}>
            <img  className={styles['cover']} alt={'Cover'}  style={{backgroundImage: `url(${coverImage})`}}/>
            <div>
                <h1 className={styles['cover-text']}>点数計算</h1>
                <h1 className={styles['cover-text']} style={{top: '50%'}}>Point System</h1>
            </div>
        </div>
    );
}