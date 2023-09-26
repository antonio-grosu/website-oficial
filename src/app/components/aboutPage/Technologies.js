import Image from "next/image";
function Technologies() {
  return (
    <div className="mt-16 poppins md:mt-24 xl:mt-36 2xl:mt-40">
      <h1 className="semibold text-4xl  text-violet-50">
        Tehnologiile care ne ajuta sa transformam vise in realitate
      </h1>
      <div className="mt-8 grid grid-cols-5 gap-x -2">
        <div className=" w-16 h-16 rounded-md bg-gray-800 p-1 flex items-center justify-center">
          <Image src="/node.png" width={64} height={0} />
        </div>
        <div className=" w-16 h-16 rounded-md bg-gray-800 p-1 flex items-center justify-center">
          <Image src="/react.png" width={64} height={0} />
        </div>

        <div className=" w-16 h-16 rounded-md bg-gray-800 p-1 flex items-center justify-center">
          <Image src="/qt.png" width={64} height={0} />
        </div>
        <div className=" w-16 h-16 rounded-md bg-gray-800 p-1 flex items-center justify-center">
          <Image src="/docker.png" width={64} height={0} />
        </div>
        <div className=" w-16 h-16 rounded-md bg-gray-800 p-1 flex items-center justify-center">
          <Image src={"/mongo.png"} width={64} height={0} />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
