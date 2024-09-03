//

function Image({ source }) {
  return (
    <>
      <img className="card-img" src={source} />
    </>
  );
}

function Title({ title }) {
  return (
    <>
      <h2 className="title">{title}</h2>
    </>
  );
}

function Txt({ text }) {
  return (
    <>
      <p className="text-body">{text}</p>
    </>
  );
}

function CardBody() {
  return (
    <>
      <div className="text">
        <Title title={"Lizard"} />
        <Txt
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          doloribus, molestias at rerum veniam aliquid ipsam deserunt ullam
          voluptates quae vitae odit quasi fugit quaerat?Lorem, ipsum dolor
          Lorem ipsum dolor sit amet.lorem"
        />
        <div className="btns">
          <Button text={"SHARE"} />
          <Button text={"LEARN MORE"} />
        </div>
      </div>
    </>
  );
}

function Button({ text }) {
  return (
    <>
      <button className="btn">{text}</button>
    </>
  );
}

function Card() {
  return (
    <>
      <div className="card">
        <Image source="../static/img/Untitled.jpg" />
        <CardBody />
      </div>
    </>
  );
}

export default Card;
