import React from 'react';

let Pagination = () => {
    return(
        <div aria-label="Pagination Navigation" role="navigation" className ="ui inverted pagination menu">
            <a aria-current="false" aria-disabled="false" tabindex="0" value="1" aria-label="Previous item" type="prevItem" className ="item">
            ⟨</a>
            <a aria-current="true" aria-disabled="false" tabindex="0" value="1" type="pageItem" className ="active item">
                1
            </a>
            <a aria-current="false" aria-disabled="false" tabindex="0" value="2" type="pageItem" className ="item">
                2
            </a>
            <a aria-current="false" aria-disabled="false" tabindex="0" value="3" type="pageItem" className ="item">
                3
            </a>
            <a aria-current="false" aria-disabled="false" tabindex="0" value="2" aria-label="Next item" type="nextItem" className ="item">⟩
            </a>
        </div>

    )
}

export default Pagination;