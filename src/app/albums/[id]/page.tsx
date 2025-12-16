import Link from "next/link";
import type {Metadata} from "next";

type Props = {
  params: Promise<{id: string}>
  searchParams: Promise<{[key: string]: string}>
}
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const id = (await params).id;
  const album = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`).then(res => res.json());

  return {
    title: `Album ${album.title} page`,
    description: `Album ${album.title} page`,
  }
}

export default async function Albums(props: Props){
  const params = await props.params

  const data = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.id}`);
  const album = await data.json();
  return (
    <div className="flex gap-4 items-center justify-start h-screen  px-8">

      <div className="flex flex-col gap-4 items-center justify-center">
        {Array.from(Array(10).keys()).map((_, i) => (
          <Link key={i} href={`/albums/${i}`}>{i}</Link>
        ))}
      </div>

      <span className="mx-24">Album {album.title}</span>
    </div>
  );
};

