const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="group flex flex-col  items-center cursor-pointer w-12 sm:w-20 hover:text-white">
      <Icon className="h-6 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest text-[.7rem] opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
