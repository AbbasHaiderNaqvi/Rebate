import React from 'react';
import home from '../../assets/images/home.png';

interface Props {
    pageName: string;
}

export const Breadcrumbs: React.FC<Props> = ({pageName}) => {
    return (
        <h2 style={{textAlign: 'left'}}>
            <span><img src={home} alt={'home'}/></span>{pageName}
        </h2>
    )

};

