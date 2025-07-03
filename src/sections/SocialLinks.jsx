import React from 'react'

const SocialLinks = () => {
  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/Sphinx-Von',
      icon: 'assets/logos/gitlan.svg',
      bg: 'bg-gradient-to-r from-gray-800 to-black'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rubina-hakim-576264321/',
      icon: 'assets/logos/linkedin.svg',
      bg: 'bg-gradient-to-r from-blue-700 to-blue-900'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/ElKvXsAa57/',
      icon: 'assets/logos/leetcode.svg',
      bg: 'bg-gradient-to-r from-yellow-400 to-orange-500'
    }
  ]

  return (
    <div className='grid grid-cols-1 gap-4 mt-10 sm:grid-cols-3'>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
          className={`flex items-center justify-between px-5 py-4 rounded-2xl shadow-md text-white transition-transform hover:scale-105 ${link.bg}`}
        >
          <div className='flex items-center gap-3'>
            <img src={link.icon} alt={link.name} className='w-8 h-8' />
            <span className='text-lg font-semibold'>{link.name}</span>
          </div>
          <img src='assets/arrow-up.svg' alt='open' className='w-4 h-4' />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
