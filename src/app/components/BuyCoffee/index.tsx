import Image from "next/image";
import Link from "next/link";
import React from "react";

const BuyCoffee: React.FC = () => {
  return (
    <Link
      href="https://www.buymeacoffee.com/rogerioo"
      target="blank"
      className="my-2"
    >
      <Image
        src="/bmc-button.svg"
        width={200}
        height={56.15}
        alt="me apoia um café"
        objectFit="cover"
      />
    </Link>
  );
};

export default BuyCoffee;
