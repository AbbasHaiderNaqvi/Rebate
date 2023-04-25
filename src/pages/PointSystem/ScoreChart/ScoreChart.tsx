import styles from './ScoreChart.module.scss';
import React from 'react';
import coverImage from '../../../assets/images/point_system_cover.jpeg';
import bird from "../../../assets/images/baqto_bird.png";


export const ScoreChart: React.FC = () => {
    return (
        <div className={styles['grid-container']}>
            <div className={styles['grid-item']}>
                <h1 className={`${styles['text-left']} ${styles['heading-small']} ${styles['pt-6']}`}>子での和了時の計算式</h1>


            </div>
            <div className={styles['grid-item']}>t2

            </div>
        </div>
    );
}