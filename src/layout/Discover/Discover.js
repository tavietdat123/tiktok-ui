import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import Hashtag from './Hashtag';
import WrapperDiscover from './WrapperDiscover';

const cx = classNames.bind(styles);

function Discover() {
    return (
        <WrapperDiscover title="Khám phá">
            <div className={cx('wrapper')}>
                <Hashtag title="sucala" />
                <Hashtag music title="fdsfsdfsd" />
                <Hashtag title="qưqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq" />
                <Hashtag title="sucala" />
                <Hashtag music title="fdsfsdfsd" />
                <Hashtag title="sucala" />
                <Hashtag title="fdsfsdfsd" />
                <Hashtag music title="qưqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq" />
                <Hashtag title="qưqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq" />
                <Hashtag title="sucala" />
                <Hashtag music title="fdsfsdfsd" />
                <Hashtag title="sucala" />
                <Hashtag title="fdsfsdfsd" />
                <Hashtag music title="qưqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq" />
                <Hashtag title="qưqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq" />
            </div>
        </WrapperDiscover>
    );
}

export default Discover;
