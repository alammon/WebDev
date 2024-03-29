import Card from './Card'

const cards = [
  {
    title: 'Me And Tule',
    image: '/images/IMG1.jpg',
  },
  {
    title: 'Pretty Dog',
    image: '/images/IMG2.jpg',
  },
  {
    title: 'Water Dog',
    image: '/images/IMG3.jpg',
  },
]

export default function Main() {
  return (
    <main>
      <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} image={card.image} />
        ))}
      </div>
    </main>
  )
}
