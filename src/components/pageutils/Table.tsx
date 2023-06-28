import React, {useState} from 'react';
import './PageUtils.scss';
import {Pagination} from './Pagination'

type TableProps = {
    data: any[]
}

export const Table: React.FC<TableProps> = ({data}) => {
    const itemsPerPage = 50;
    const [sortField, setSortField] = useState('gameId'); // Initial sort field
    const [sortDirection, setSortDirection] = useState('asc'); // Initial sort direction
    const [currentPage, setCurrentPage] = React.useState(1); // Current page
    const totalPages = Math.ceil(data.length / itemsPerPage); // Total number of pages
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const handleSort = (field: string) => {
        if (field === sortField) {
            const direction = sortDirection === 'asc' ? 'desc' : 'asc';
            setSortDirection(direction);
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };
    const sortedData = [...data].sort((a, b) => {
        const fieldA = a[sortField];
        const fieldB = b[sortField];

        if (sortDirection === 'asc') {
            if (fieldA < fieldB) return -1;
            if (fieldA > fieldB) return 1;
        } else {
            if (fieldA > fieldB) return -1;
            if (fieldA < fieldB) return 1;
        }

        return 0;
    });
    const currentPageData = sortedData.slice(startIndex, endIndex);

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th onClick={() => handleSort('gameName')}>
                        Game Name
                        <button className="sort-button">
                            {sortField === 'gameName' && sortDirection === 'asc' ? '▲' : '▼'}
                        </button>
                    </th>
                    <th onClick={() => handleSort('provider')}>
                        Provider
                        <button className="sort-button">
                            {sortField === 'provider' && sortDirection === 'asc' ? '▲' : '▼'}
                        </button>
                    </th>
                    <th onClick={() => handleSort('gameId')}>
                        Game Id
                        <button className="sort-button">
                            {sortField === 'gameId' && sortDirection === 'asc' ? '▲' : '▼'}
                        </button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {currentPageData.map((item) => (
                    <tr key={item['gameId']}>
                        <td>{item['gameName']}</td>
                        <td>{item['provider']}</td>
                        <td>{item['gameId']}</td>

                    </tr>
                ))}
                </tbody>
            </table>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>

        </>
    );
}

