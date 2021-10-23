import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <Link href="/products"> PRODUCTS</Link>
    <Link href="/sell"> sell</Link>
    <Link href="/orders"> orders</Link>
    <Link href="/account"> account</Link>
  </nav>
);

export default Nav;
