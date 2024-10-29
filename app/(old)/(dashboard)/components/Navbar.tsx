import Link from "next/link";

import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <p>Next.js</p>
        <ul className={styles.links}>
          <Link href="/">
            <li>Home 🏠</li>
          </Link>
          <Link href="/products">
            <li>Products</li>
          </Link>
          <Link href="/cart">
            <li>Cart</li>
          </Link>
          <Link href="/checkout">
            <li>Checkout</li>
          </Link>
          <Link href="/order">
            <li>Order</li>
          </Link>
          <Link href="/account">
            <li>Account</li>
          </Link>
          <Link href="/login">
            <li>Login</li>
          </Link>
          <Link href="/register">
            <li>Register</li>
          </Link>
          <Link href="/search?q=tas">
            <li>Search</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
