import Image from "next/image";

export default function Explore(props) {
  const imageSrc = props.imageSrc;

  return (
    <div>
      <Image
          src={imageSrc}
          alt="gif for landing page"
          width={400}
          height={400}
          priority
          onClick={() => handleSelectClick()}
        />
      <h1>HEY!!</h1>
    </div>
  );
}