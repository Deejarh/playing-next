import Link from "next/link";

interface User  {
data : Array<Record<string,any>>
}
export default function Hello({ data } : User) {
  console.log(data)
  const name = data?.[0].name
  return (
    <main>
      <h1>Hello page {name} </h1>
      <Link className=" text-green-400 underline" href={"/"}>
        homepage
      </Link>
    </main>
  );
}

 export async function getServerSideProps() {
  try {
    const res = await fetch("https:/api.github.com/users/deejarh/repos");
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
