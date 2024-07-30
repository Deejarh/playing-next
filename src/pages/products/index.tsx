import Link from "next/link";

interface User {
  data: Array<Record<string, any>>
}

export default function Hello({ data }: User) {
  console.log(data)
  return (
    <main className="p-4 mt-4">
      <h1>Products page </h1>
      <Link className=" text-green-400 underline" href={"/"}>
        homepage
      </Link>
      <Products products={data} />
    </main>
  );
}



// Products
// ProductList
// ProductItem
function ProductItem({ product }: { product: Record<string, any> }) {
  return (
    <div className="bg-white text-black border rounded-sm shadow-sm">
      <Link href={`product/${product.name}`}>
        <h2>{product?.name}</h2>
        <p>{product?.description}</p>
      </Link>
    </div>
  );
}

function ProductList({ products }: { products: Array<Record<string, any>> }) {
  if (!Array.isArray(products) || products.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <section className="grid grid-cols-3 gap-3">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}


function Products({ products }: { products: Array<Record<string, any>> }) {
  return (
    // ProductList
    <ProductList products={products} />
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https:/api.github.com/users/deejarh/repos?per_page=10&page=1");
    const result = await res.json();
    return {
      props: {
        data: result,
      },
    };
  } catch (error: Error) {
    return {
      message: error.message,
    };
  }
}
