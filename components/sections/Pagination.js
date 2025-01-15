import React from 'react';

export default function Pagination({ links, handlePagination }) {

    // Helper function to extract page number from the URL
    const extractPageNumber = (url) => {
        if (!url) return null;
        const params = new URLSearchParams(new URL(url).search);
        return params.get('page');
    }

    const handlePaginationClick = (e, url) => {
        e.preventDefault();
        const pageNumber = extractPageNumber(url) || 1; // Default to 1 if no page is found
        handlePagination(pageNumber); // Pass the page number to handlePagination
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
        {
            links?.length > 3 && (
                <div className="pagination-container custom-container">
                    <ul className="pagination">
                        {
                            links?.map((link, i) => {
                                const isPrevOrNext = link.label === '&laquo; Previous' || link.label === 'Next &raquo;';
                                const label = link.label === '&laquo; Previous' ? 'السابق' :
                                    link.label === 'Next &raquo;' ? 'التالي' : link.label;

                                return (
                                    <li key={i} className={`page-item ${link.active ? "active" : ""} ${!link.url && "disabled"}`}>
                                        <button
                                            onClick={(e) => handlePaginationClick(e, link.url)}
                                            className={`page-link ${!isPrevOrNext ? 'en-txt' : ''}`} // Conditionally add en-txt class
                                            dangerouslySetInnerHTML={{ __html: label }}
                                        />
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            )
        }
        </>
    );
}
