import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center justify-start gap-2">
      <Image
        src={'/shopping-cart.png'}
        alt={"shopping-cart png"}
        width={40}
        height={40}
        draggable={false} />
      <span className="text-2xl font-bold">
        Next Shop
      </span>
    </Link>
  );
};

export default Logo;