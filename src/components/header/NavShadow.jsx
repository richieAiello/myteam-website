const NavShadow = props => {
  return (
    <div
      className={`
        w-screen h-screen
        absolute top-0 left-0 z-10
        ${props.className}
        md:hidden
      `}
      onClick={props.onClick}
    />
  );
};

export default NavShadow;
