import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
const cx = classNames.bind(styles);
function AccountItems() {
  return (
    <div className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05aa222706c452c8ad0ea7d2e719a745~c5_100x100.jpeg?x-expires=1682233200&x-signature=uUo2tuodsYRtl5e1MoRpCgrTqlk%3D"
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
