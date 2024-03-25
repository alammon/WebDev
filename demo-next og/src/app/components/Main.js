import Card from './Card'

const cards = [
  {
    title: 'Me And Tule',
    img: '/images/IMG1.jpg',
  },
  {
    title: 'Pretty Dog',
    img: '/images/IMG2.jpg',
  },
  {
    title: 'Water Dog',
    img: '/images/IMG3.jpg',
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
