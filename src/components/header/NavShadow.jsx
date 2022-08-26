const NavShadow = props => {
  return (
    <div
      className={`
        w-screen h-screen bg-[rgba(0,0,0,.5)]
        absolute top-0 left-0 z-10
        ${props.className}
        md:hidden
      `}
      onClick={props.onClick}
    />
  );
};

export default NavShadow;
