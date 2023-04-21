import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import {
  faCircleQuestion,
  faCoins,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faLanguage,
  faPlus,
  faSignIn,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/image';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Vietnamese',
        },
        {
          code: 'chi',
          title: 'Chinese',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and Help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const currentUser = true;

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@hoaa',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Logout',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="tiktok" />
        </div>

        <Search />

        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 250]} content="Upload Video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 250]} content="Messages" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 250]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Log in
              </Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                alt="avatar"
                src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/335476206_532131129114062_2397089231255557426_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Og2tEG8cVsoAX8rk6Fp&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBpngNJ58c4Gv0lgdNPUCDceieZKjFsQeMW59NeCguHlA&oe=64453594"
                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}
export default Header;
