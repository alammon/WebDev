import Image from 'next/image'
import CardContainer from './components/CardContainer'
import Header from './components/Header'
import Main from './components/Main'

export default function Home() {
  return (
    <div>
      <div className="p-12">
        <Header />
        <CardContainer />
      </div>
    </div>
  )
}
