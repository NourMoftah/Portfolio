import { PropsWithChildren } from "react";

export const HeroOrbit = ({
  children,
  x,
  y,
  size = 40,
  rotation = 0,
}: PropsWithChildren<{
  x: string;
  y: string;
  size?: number;
  rotation?: number;
}>) => {
  return (
    <div
      className="absolute animate-pulse "
      style={{
        left: x,
        top: y,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        width: size,
        height: size,
      }}
    >
      {children}
    </div>
  );
};
