import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from './navbar.module.css';
import LoginBtn from './loginlink';

const DynamicDropdown = dynamic(() => import('./Dropdown'), { ssr: false });

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/logo.jpeg"
            alt="NODE"
            width={150}
            height={50}
            layout="responsive"
          />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/club">Club</Link>
        </li>
        <li>
          <Link href="/jobs">Jobs</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li>
          <LoginBtn />
        </li>
        <li className={styles.profileContainer}>
          <DynamicDropdown />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
