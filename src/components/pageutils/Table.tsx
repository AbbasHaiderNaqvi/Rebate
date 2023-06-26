import React from 'react';
import './PageUtils.scss';

type TableProps = {
    data: {
        label: string,
        '1翻': string,
        '2翻': string,
        '3翻': string,
        '4翻': string,
    }[]
}

export const Table: React.FC<TableProps> = ({ data }) => {
    return (
        <table>
            <thead>
            <tr>
                <th></th>
                <th>1翻</th>
                <th>2翻</th>
                <th>3翻</th>
                <th>4翻</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item['1翻']}>
                    <td>{item['label']}</td>
                    <td>{item['1翻']}</td>
                    <td>{item['2翻']}</td>
                    <td>{item['3翻']}</td>
                    <td>{item['4翻']}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

