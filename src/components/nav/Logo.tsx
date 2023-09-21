"use client";
import { FC } from "react";

interface Props {
  color: string;
}

const Logo: FC<Props> = (props) => {
  return (
    <>
      <h1 className="navLogo uppercase"
        style={{
          color: props.color,
        }}
      >
        elysium
      </h1>
    </>
  );
};

export default Logo;
