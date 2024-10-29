import Link from "next/link";

function Order() {
  return (
    <main>
      <h1>Order Page</h1>
      <ul>
        <Link href="/order/12345">
          <li>Komputer</li>
        </Link>
        <Link href="/order/6594">
          <li>Laptop</li>
        </Link>
        <Link href="/order/784521">
          <li>CPU</li>
        </Link>
      </ul>
    </main>
  );
}

export default Order;
