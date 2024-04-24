import Image from "next/image";
function Serviciu(props) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 md:mt-32 xl:mt-40 2xl:mt-44">
      <div className="hidden md:block p-4 w-96 h-96  ">
        <Image
          src={props.src}
          className="w-full slide-left"
          width={0}
          height={0}
        />
      </div>
      <div className="slide-in">
        <h1 className="sora text-4xl text-violet-50 semibold">
          {props.serviciu}
        </h1>
        <div className="mt-4 flex justify-start gap-2">
          {props.facts &&
            props.facts.map((item) => {
              return (
                <p className="py-1 px-2 bg-gray-800/50 poppins text-sm text-violet-50 rounded-md">
                  {item}
                </p>
              );
            })}
        </div>
        <div className="block md:hidden w-full mt-12 mb-10  ">
          <Image src={props.src} className="w-full" width={0} height={0} />
        </div>

        <div className="text-violet-50 poppins mt-4">{props.description}</div>
      </div>
      <div className="slide-in">
        <h3 className="poppins text-violet-50 text-lg semibold inline-block">
          Timp de Executie
        </h3>
        <p className=" inline-block poppins ml-2 text-violet-50">
          {" "}
          ~ {props.time} zile
        </p>
        <p className="mt-4 poppins text-violet-50">
          Esti gata sa dai start-ul cu{" "}
          <span className="semibold">{props.nickname}</span>?
        </p>
        <div className="mt-6">
          <a
            href="tel:+40747738250"
            className="bg-violet-500/30 hover:shadow-md  hover:shadow-violet-50/50 hover:bg-violet-500/80 transition-all ease-in-out px-4 py-2 rounded-xl poppins text-violet-50 border-2 border-violet-500"
          >
            <svg
              className="w-4 h-4 inline-block mr-2  text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 18"
              fill="currentColor"
            >
              <path
                d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z"
                fill="currentColor"
              />
              <path
                d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z"
                fill="currentColor"
              />
            </svg>
            Hai sa discutam
          </a>
        </div>
      </div>
      <div className="slide-in border-l-2 md:w-8/12 text-center md:text-left bg-gray-800 border-violet-500 rounded-l-xl rounded-r-md py-2 lg:py-4 xl:py-6 2xl:py-8">
        <h3 className="poppins px-1 md:px-2 lg:px-4 xl:px-6 2xl:px-8 text-violet-50 text-lg semibold inline-block">
          Alte Servicii
        </h3>
        <div className="mt-2">
          {props.services &&
            props.services.map((item) => {
              return (
                <p className="border-t-2 mt-1 poppins text-sm text-violet-50 py-2 px-1 md:px-2 lg:px-4 xl:px-6 2xl:px-8 border-violet-500 rounded-r-full">
                  {item.img}
                  {item.p}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Serviciu;
