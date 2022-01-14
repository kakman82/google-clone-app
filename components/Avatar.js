import Image from 'next/image';

const Avatar = ({ url, className }) => {
  return (
    <div className={`${className}`}>
      <Image
        loading='lazy'
        className='rounded-full cursor-pointer transation duration-150 transform hover:scale-110'
        src={url}
        alt='profile_picture'
        height={50}
        width={50}
      />
    </div>
  );
};

export default Avatar;
