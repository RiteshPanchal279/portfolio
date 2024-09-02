import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, unde.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, unde.",
  },
  {
    id: 2,
    title: "Healthy diet",
    img: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, unde.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, unde.",
  },
  {
    id: 3,
    title: "library management",
    img: "https://images.pexels.com/photos/7063752/pexels-photo-7063752.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, unde.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, unde.",
  },
  {
    id: 4,
    title: "AI learning",
    img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, unde.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, unde.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-160, 160]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img
              src={item.img}
              alt=""
            />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>
            {item.desc}
            </p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    dumping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="proggressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
export default Portfolio;
