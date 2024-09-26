'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Dropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className={styles.profileContainer}>
      <button
        className={styles.profileButton}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        style={{ borderRadius: '50%' }}
      >
        <Image
          src="/profile.jpg"
          alt="Profile-image"
          width={60}
          height={60}
          className={styles.profileImage}
        />
      </button>
      <div className={`${styles.dropdown} ${dropdownOpen ? styles.open : ''}`}>
        <ul>
          <li>
            <Link href="/profile">My Profile</Link>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li>
          <li>
            <Link href="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
