import Link from "next/link";

interface LinkProps {
  name: string;
  link: string;
}

const Menu = () => {
  return (
    <div className="absolute top-0 right-0 lg:w-[30%] md:w-[30%] sm:w-[60%] w-[80%] h-full bg-black lg:p-10 p-6 border-l-4 border-green-400">
      <LinkMenu name="home" link="/" />
      <LinkMenu name="tees" link="/" />
      <LinkMenu name="hoodies" link="/" />
      <LinkMenu name="sweaters" link="/" />
      <LinkMenu name="shop" link="/collections/all" />
    </div>
  );
};

const LinkMenu = ({ name, link }: LinkProps) => {
  return (
    <Link href={link}>
      <h1 className="lg:text-xl md:text-xl sm:text-md text-md font-rocker font-semibold uppercase tracking-wide lg:p-3 p-2 text-green-600">
        {name}
      </h1>
    </Link>
  );
};

export default Menu;
