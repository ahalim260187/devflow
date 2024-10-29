import Link from "next/link";

function Products() {
  return (
    <main>
      <h1>Products List</h1>
      <ul>
        <Link href="/products/balpoint">
          <li>Balpoint</li>
        </Link>
        <Link href="/products/laptop">
          <li>laptop</li>
        </Link>
      </ul>
    </main>
  );
}

export default Products;
