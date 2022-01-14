import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className='stick top-0 bg-white'>
      <div className='flex w-full items-center p-6'>
        <Image
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          height={40}
          width={120}
          alt='google_logo_pic'
          className='cursor-pointer'
          onClick={() => router.push('/')}
        />
        <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
          <input
            ref={searchInputRef}
            className='flex-grow w-full focus:outline-none'
            type='text'
            defaultValue={router.query.term}
          />
          <XIcon
            className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon className='h-8 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
          <SearchIcon className='h-6 hidden sm:inline-flex text-blue-500' />
          {/* hidden button for new search - press enter */}
          <button className='hidden' type='submit' onClick={search}>
            Search
          </button>
        </form>
        {/* className does not work in Components so it should be a prop */}
        <Avatar
          className='ml-auto'
          url='https://avatars.githubusercontent.com/u/41956184?v=4'
        />
      </div>
      {/* Header Options */}
      <HeaderOptions />
    </header>
  );
};

export default Header;
