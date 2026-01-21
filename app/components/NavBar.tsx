const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center z-10 w-4xl bg-[#0d111a] py-4 rounded-full px-8 border border-slate-600/20">
      <div className="text-lg font-bold text-white w-36 leading-4 tracking-tighter">
        Bentegri <br></br>
        <span className="font-normal text-sm ">Mohamed Yacine</span>
      </div>
      <ul className="flex flex-row gap-6 [&>li]:cursor-pointer [&>li]:text-base [&>li]:font-extrabold [&>li]:uppercase [&>li]:font-darker">
        <li className="text-white hover:text-orange-500 transition-all duration-300">
          About
        </li>
        <li className="text-white">Projects</li>
        <li className="text-white">Experience</li>
        <li className="text-white">Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
