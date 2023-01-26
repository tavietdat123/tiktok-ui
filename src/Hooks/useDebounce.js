import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function useDebounce(value, delay) {
    const [useDebounce, setUseDebounce] = useState(value);
    useEffect(() => {
        const idTimeout = setTimeout(() => setUseDebounce(value), delay);
        return () => clearTimeout(idTimeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return useDebounce;
}
useDebounce.prototype = {
    value: PropTypes.node.isRequired,
    delay: PropTypes.number.isRequired,
};
export default useDebounce;
