import style from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={style.container}>
      {/* <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} /> */}
      <Circle backgroundColor="#01c686" top="-45vh" left="-45vh" />
      {/* <Circle backgroundColor="#01c686" right="-40vh" /> */}
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>PROGRESSO</span> CONSTRUCTION
          COMPANY
        </h1>
        {/* <p className={style.desc}>
         Building better for tomorrow.
        </p> */}
        <p className={style.desc}>
         FULL WEBSITE COMING SOON
        </p>
        <button className={style.button}>DISCOVER</button>
      </div>
      <div className={style.card}>
        <img
          src="https://media.istockphoto.com/photos/experienced-engineer-explaining-the-problems-in-construction-works-picture-id1267010934?k=20&m=1267010934&s=170667a&w=0&h=K0t50arXZu8ph8dettFBMMEN5vjbvlXovcxHvO7svxg="
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
