import dynamic from 'next/dynamic';

const Image = dynamic(() => import("next/image"));

const Department = ({ image, name }) => {
  return (
    <div className="flex items-center gap-3 px-6 py-4 mt-2 text-xl leading-5 capitalize whitespace-nowrap rounded-lg shadow-md bg-gray-700 bg-opacity-90 max-md:px-3 max-w-[300px]">
      <div className="relative w-16 h-16">
        <Image
          loading="lazy"
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
          layout="fill"
        />
      </div>
      <div className="text-white overflow-hidden overflow-ellipsis">{name}</div>
    </div>
  );
};

export default Department;