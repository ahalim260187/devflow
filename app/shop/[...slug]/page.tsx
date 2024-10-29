function Shop({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Shop Page : {params.slug} </h1>
    </main>
  );
}

export default Shop;
