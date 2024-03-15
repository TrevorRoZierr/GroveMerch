interface Props {
  buttonComp: any;
}

const NavButton = ({ buttonComp }: Props) => {
  return (
    <>
      <button className="text-black font-extrabold bg-green-600 p-2 rounded-full lg:text-xl text-sm lg:ml-4 ml-1">
        {buttonComp}
      </button>
    </>
  );
};

export default NavButton;
