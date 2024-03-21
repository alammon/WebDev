import Card from './Card'
const cards = [
  {
    title: 'Me And Tule',
    img: 'demo-next/src/app/components/images/IMG1.jpeg',
  },
  {
    title: 'Pretty Dog',
    img: 'demo-next/src/app/components/images/IMG2.jpeg',
  },
  {
    title: 'Water Dog',
    img: 'demo-next/src/app/components/images/IMG3.jpeg',
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
