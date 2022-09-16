import React from 'react';

function Loader() {
    return (
        <div className='loading'>
            <div className="spinner-border text-warning" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loader;