const Header = () => {
  return (
    <header className="fixed z-50 top-0 left-0 bg-header wrapper">
      <div className="flex justify-end gap-4 items-center w-[90%] h-[100px]">
        <a href="https://twitter.com/Sake_ERC_" target="blank">
          <img src="/twitter.webp" className="w-5 object-contain" alt="" />
        </a>
        <a href="https://t.me/Sake_ERC" target="blank">
          <img src="/copy.webp" className="w-5 object-contain" alt="" />
        </a>
        {/* <a href="#" target="blank">
          <img src="/user.svg" className="w-5 object-contain" alt="" />
        </a>
        <a className="text-white font-normal text-sm" href="#">
          Login
        </a>
        <a
          href="#"
          target="blank"
          className="bg-white hover:opacity-70 transition-all duration-300 text-[rgb(16,19,23)] text-base w-[106px] h-[45px] grid place-items-center"
        >
          Telegram
        </a> */}
      </div>
    </header>
  );
};

export default Header;
