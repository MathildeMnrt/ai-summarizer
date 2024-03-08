import React from 'react';
import { logo } from '../assets';


const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img
          src={logo}
          alt="sumz-logo"
          className='w-28 object-contain'
        />

        <button
          type="button"
          onClick={() => window.open('http://github.com/')}
          className='black_btn'
        >
          Github
        </button>

      </nav>

      <h1 className='head_text'>
          Summarize Articles with <br className='max-md:hidden'/>
            <span className='orange_gradient'>
              Open AI GTP
            </span>
        </h1>
        <h2 className='desc'>
        Discover a smarter way to explore the web. Our intelligent URL summarizer unravels the mysteries of online content, providing you with clear and concise summaries. Just paste a link and let the magic happen.
        </h2>
    </header>
  )
}

export default Hero