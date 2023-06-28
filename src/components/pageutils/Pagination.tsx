import React from 'react';
import './PageUtils.scss';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    maxButtons?: number;
    onPageChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, maxButtons = 5, onPageChange }) => {
    const handlePageChange = (page: number) => {
        onPageChange(page);
    };

    const handlePreviousPage = () => {
        onPageChange(currentPage - 1);
    };

    const handleNextPage = () => {
        onPageChange(currentPage + 1);
    };

    const handleFirstPage = () => {
        onPageChange(1);
    };

    const handleLastPage = () => {
        onPageChange(totalPages);
    };

    const getPageNumbers = () => {
        const pageNumbers = [];
        const visibleButtons = Math.min(totalPages, maxButtons);

        let startPage = Math.max(currentPage - Math.floor(visibleButtons / 2), 1);
        const endPage = Math.min(startPage + visibleButtons - 1, totalPages);

        if (endPage - startPage + 1 < visibleButtons) {
            startPage = Math.max(endPage - visibleButtons + 1, 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    return (
        <div style={{paddingTop:'20px',paddingBottom:'20px'}}>
            <button className={'pg-button'}  disabled={currentPage === 1} onClick={handleFirstPage}>
                {'<<'}
            </button>
            <button className={'pg-button'} disabled={currentPage === 1} onClick={handlePreviousPage}>
                {'<'}
            </button>
            {getPageNumbers().map((page, index) => (
                <button
                    key={index}
                    className={currentPage === page ? ' pg-button active' : 'pg-button'}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </button>
            ))}
            {totalPages > maxButtons && currentPage + Math.floor(maxButtons / 2) < totalPages && (
                <span className="dots" style={{fontSize:'40px'}}>. . .</span>
            )}
            {totalPages > maxButtons && currentPage + Math.floor(maxButtons / 2) < totalPages && (
                <button className={'pg-button'} onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
            )}
            <button className={'pg-button'} disabled={currentPage === totalPages} onClick={handleNextPage}>
                {'>'}
            </button>
            <button className={'pg-button'}  disabled={currentPage === totalPages} onClick={handleLastPage}>
                {'>>'}
            </button>
        </div>
    );
};
