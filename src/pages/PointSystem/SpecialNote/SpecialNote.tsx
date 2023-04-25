import styles from './SpecialNote.module.scss';
import React from 'react';
import bird from '../../../assets/images/baqto_bird.png';

type Props = {
    note: React.ReactNode;
}
export const SpecialNote: React.FC<Props> = ({note}) => {
    return (
        <div className={styles['grid-container']}>
            <div className={styles['grid-item']}><img src={bird} alt={'Note'} className={styles['bird-image']}/></div>
            <div className={`${styles['grid-item']} ${styles['note-bg']}`}>{note}</div>
        </div>
    );
}