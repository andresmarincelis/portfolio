import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  data: {
    id?: number;
    title: string;
    image: string;
    urlGithub: string | null;
    urlDemo?: string | null;
    isPlaceholder?: boolean;
  };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { title, image, urlGithub, isPlaceholder } = data;

  return (
    <div className="p-4 border border-teal-50 rounded-xl">
      <h3 className="mb-4 text-xl font-bold">{title}</h3>

      <Image
        src={image}
        alt="Image product"
        width={200}
        height={300}
        className="rounded-2xl object-cover mx-auto w-[200px] h-[300px]"
      />

      {!isPlaceholder && (
        <div className="flex gap-5 mt-5 justify-center">
          {urlGithub && (
            <Link
              href={urlGithub}
              target="_blank"
              className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-slate-500/80"
            >
              Github
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default PortfolioBox;
