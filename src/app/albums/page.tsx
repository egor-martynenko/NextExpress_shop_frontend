import Link from "next/link";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Albums Shop",
  description: "create by martego",
};

const Page = () => {
  return (
    <div className="flex items-center justify-center w-full mt-18 gap-12">
      {Array.from(Array(10).keys()).map((_, i) => (
        <Link key={i} href={`albums/${i}`}>{i}</Link>
      ))}
    </div>
  );
};

export default Page;
