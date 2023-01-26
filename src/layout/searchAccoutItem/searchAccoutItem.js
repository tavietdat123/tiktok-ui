import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Image from '../Image/Image';
import style from './searchAccoutItem.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(style);
function AccoutItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('rs_accout', 'd-flex')}>
            <Image src={data.avatar} alt={data.full_name} />
            <div>
                <h4>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCircleCheck} />}
                </h4>
                <span className={cx('dev')}>{data.full_name}</span>
            </div>
        </Link>
    );
}
AccoutItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccoutItem;
