import dynamic from 'next/dynamic';

const Image = dynamic(() => import("next/image"));

const Department = ({ image, name, isLast }) => {
  
  return (
    <div className={`border border-gray-400 gap-3 px-6 py-4 mt-2 text-lg leading-6 capitalize whitespace-normal rounded-lg shadow-md bg-gray-800  bg-opacity-90 max-md:px-3 max-w-[350px] flex items-center`}>
      <div className="relative w-16 h-16">
        <Image
          loading="lazy"
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
          layout="fill"
        />
      </div>
      <div className="text-white overflow-hidden">{name}</div>
    </div>
  );
};

export default Department;