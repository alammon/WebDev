import Card from "./Card";

const cards = [
  {
    title: "Me And Tule",
    img: "/images/IMG1.jpg",
  },
  {
    title: "Pretty Dog",
    img: "/images/IMG2.jpg",
  },
  {
    title: "Water Dog",
    img: "/images/IMG3.jpg",
  },
];

function Main() {
  return (
    <main>
      <div
        className="flex gap-x-12 my-12 flex-wrap gap-y-6"
        id="card-container"
      >
        {cards.map((card, index) => (
          <Card key={index} title={card.title} image={card.img} />
        ))}
      </div>
      <div>
        {/* this isn't working */}
        <Content paragraph="In this paragraph I am not talking about anything in particular. this is just to fill space so my my website looks gucci." />
        <Content paragraph="Once upon a time there was a dog. her name was Tule. tule was the coolest dog ever. The end. " />
      </div>
      <Flex classNames="bg-blue-600 p-12 text-blue-100">
        <span>Child tag one</span>
        <span>Child tag two</span>
        <span>Child tag three</span>
      </Flex>
    </main>
  );
}
