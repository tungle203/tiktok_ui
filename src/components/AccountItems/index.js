import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItems() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/335476206_532131129114062_2397089231255557426_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Og2tEG8cVsoAX8rk6Fp&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBpngNJ58c4Gv0lgdNPUCDceieZKjFsQeMW59NeCguHlA&oe=64453594"
        alt="hoaa.hanassii"
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Đào Lê Phương Hoa</span>
          <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
        </p>
        <span className={cx('username')}>hoaa.hanassii</span>
      </div>
    </div>
  );
}
export default AccountItems;
