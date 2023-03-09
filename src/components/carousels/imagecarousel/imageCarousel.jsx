// react
import { useState } from "react";

// material
import { Box, Stack } from "@mui/material";

// framer motion
import { motion, AnimatePresence } from "framer-motion";

// styles override
import RootStyled from "./styled";

const product = [
  {
    src: "/static/images/product-img.png",
    id: 1,
  },
  {
    src: "/static/images/product-img1.png",
    id: 2,
  },
  {
    src: "/static/images/product-img.png",
    id: 3,
  },
  {
    src: "/static/images/product-img1.png",
    id: 3,
  },
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

// ----------------------------------------------------------------------
function CarouselItem({ ...props }) {
  const { item } = props;

  return (
    <div className="slide-wrapper">
      {item && (
        <img
          src={item.src}
          objectFit="cover"
          height={385}
          width="100%"
          alt="hero-carousel"
        />
      )}
      <Box className="bg-overlay" />
    </div>
  );
}

export default function ImageCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = Math.abs(page % product?.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <RootStyled>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className="motion-dev"
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <CarouselItem
            item={product[imageIndex]}
            index={product[imageIndex]}
            activeStep={imageIndex}
            isActive={imageIndex}
            key={Math.random()}
          />
        </motion.div>
      </AnimatePresence>
      <Stack
        direction="row"
        justifyContent={product.length < 6 ? "center" : "left"}
        spacing={1}
        className="controls-wrapper"
      >
        {product.map((item, i) => (
          <Box
            key={Math.random()}
            className={`controls-button ${imageIndex === i ? "active" : ""}`}
            onClick={() => {
              setPage([i, i]);
            }}
          >
            <img
              src={item.src}
              objectFit="cover"
              width={60}
              height={76}
              alt="hero-carousel"
            />
            {/* <Image
              priority
              fill
              
              placeholder="blur"
              blurDataURL={item.blurDataURL}
            /> */}
          </Box>
        ))}
      </Stack>
    </RootStyled>
  );
}
