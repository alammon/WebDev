import Card from './Card'
import IMG1 from 'demo-next/public/IMG1.jpg'
import IMG2 from 'demo-next/public/IMG2.jpg'
import IMG3 from 'demo-next/public/IMG3.jpg'

const cards = [
  {
    title: 'Me And Tule',
    IMG1,
  },
  {
    title: 'Pretty Dog',
    img: IMG2,
  },
  {
    title: 'Water Dog',
    IMG3,
  },
]

export default function Main() {
  return (
    <main>
      <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} image={card.img} />
        ))}
      </div>
    </main>
  )
}
