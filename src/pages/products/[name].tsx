import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// server side rendering - pages router


// server components - app router
// server actions - app router

import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next'

type Repo = {
  name: string
  stargazers_count: number
}

export const getStaticPaths = (async () => {
  // console.log(name)
  const res = await fetch("https:/api.github.com/users/deejarh/repos?per_page=10&page=1");
    const results = await res.json();
    const paths = results.map((result: any) => `/products/${result.name}`)
    // console.log(paths)
  return {
    paths,
    fallback: true, // false or "blocking"
  }
})

export async function getStaticProps({ params }: { params: { name: string } }) {
  // Fetch item data based on the ID from params
  // console.log(`https://api.github.com/repos/deejarh/${params.name}`)
  const res = await fetch(`https://api.github.com/repos/deejarh/${params.name}`);
  const product = await res.json();
  // console.log(product);

  return {
    props: {
      product,
    },
  };
}

// export const getStaticProps = (async (context) => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const repo = await res.json()
//   return { props: { repo } }
// }) satisfies GetStaticProps<{
//   repo: Repo
// }>


function SingleProductPage({product}: { product: Record<string, any> }) {
  // const res = await fetch("http://localhost:3000/api/hello")
  // const product = await res.json();
  // const [data, setData] = useState(null)
  // const [loading, setLoading] = useState(false)

  const router = useRouter();
  const params = useParams();

  // If the page is still being generated
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // useEffect(() => {
  //   fetch('/api/hello')
  //     .then((res) => res.json())
  //     .then((data) => {
        // console.log(data)
  //       setData(data)
  //       setLoading(false)
  //     })
  // }, [])

  // console.log(product);

  // console.log(params);
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}




export default SingleProductPage;
