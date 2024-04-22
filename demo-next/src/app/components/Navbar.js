import Button from './Button'
import Tag from './Tag'
// import { CodeBracketIcon } from '@heroicons/react/24/solid'

const navigationButtons = [
  {
    title: 'Blog',
    href: '/blog',
    isNew: true,
  },
  {
    title: 'About',
    href: '/about',
    isNew: false,
  },
  {
    title: 'Home',
    href: '/',
    isNew: false,
  },
]

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-orange-100 p-5 items-center  top-0 shadow-lg">
      <a href="/" className="bg-orange-50 p-4 rounded-full hover:scale-110 transition-all cursor-pointer">
        <img className="object-cover w-10 h-10" src="../public/vercel.svg" alt="Page logo" />
      </a>
      <div className="flex gap-x-4 items-center">
        {navigationButtons.map(({ href, title, isNew }) => (
          <>
            <Button href={href} classNamesProp="flex text-xl">
              {title}
            </Button>
          </>
        ))}
      </div>
    </nav>
  )
}
