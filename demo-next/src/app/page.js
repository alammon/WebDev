import Image from 'next/image'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
      <div className="p-12">
        <Header />
        <Main />
      </div>
    </div>
  )
}
