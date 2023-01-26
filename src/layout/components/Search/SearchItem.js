import AccoutItem from '../../searchAccoutItem/searchAccoutItem';
import React from 'react';
import PropTypes from 'prop-types';
function SearchItem({ result }) {
    return (
        <>
            {result.map((result) => (
                <AccoutItem key={result.id} data={result} />
            ))}
        </>
    );
}
SearchItem.propTypes = {
    result: PropTypes.array.isRequired,
};
export default React.memo(SearchItem);
