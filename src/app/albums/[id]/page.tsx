import Link from "next/link";

type Props = {
  params: Promise<{id: string}>
  searchParams: Promise<{[key: string]: string}>
}
export default async function Albums(props: Props){
  const params = await props.params

  const data = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums = await data.json();
  return (
    <div className="flex gap-4 items-center justify-start h-screen  px-8">

      <div className="flex flex-col gap-4 items-center justify-center">
        {Array.from(Array(10).keys()).map((_, i) => (
          <Link key={i} href={`/albums/${i}`}>{i}</Link>
        ))}
      </div>

      <span className="mx-24">Albums {albums[params.id]?.title}</span>
    </div>
  );
};

