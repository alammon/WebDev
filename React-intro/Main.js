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

      <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="para-container">
        {para.map((item, index) => <Content key={index} paragraph={item.paragraph} />)}
      </div>

    </main>
  );
  }