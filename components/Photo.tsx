import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  position?: string;
};

export default function Photo({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 40vw, 90vw",
  priority = false,
  position = "object-center",
}: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${position}`}
      />
    </div>
  );
}