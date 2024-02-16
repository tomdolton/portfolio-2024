export const enterLeft = {
  visible: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.6,
    },
  },
  hidden: { x: -500 },
};

export const enterTop = {
  visible: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.2,
      delay: 2.5,
    },
  },
  hidden: { y: -500 },
};

export const fadeUp = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.2 },
  },
  hidden: { opacity: 0, y: 30 },
};
