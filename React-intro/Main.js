const cards = [
  {
    title: 'Me And Tule',
    img: "images/IMG1.jpeg",
  },
  {
    title: 'Pretty Dog',
    img: "images/IMG2.jpeg",
  },
  {
    title: 'Water Dog',
    img: "images/IMG3.jpeg",
  }
]

const para = [
  {
    paragraph: 'this is a paragraph',
  },
  {
    paragraph: 'oogaboogah'
  }
]

function Main() {
  return (
    <main>
      <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
        {cards.map((card, index) => <Card key={index} title={card.title} image={card.img} />)}
      </div>
      <div>
        <Content paragraph="In this paragraph I am not talking about anything in particular. this is just to fill space so my my website looks gucci." />
        <Content paragraph="Once upon a time there was a dog. her name was Tule. tule was the coolest dog ever. The end. "/>
      </div>
    </main>
  );
}