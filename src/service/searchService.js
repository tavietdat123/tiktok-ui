import * as request from '../utils/request';
import PropTypes from 'prop-types';
export const search = async (q, type = 'less') => {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log('error');
    }
};
search.propTypes = {
    q: PropTypes.string,
    type: PropTypes.string,
};
