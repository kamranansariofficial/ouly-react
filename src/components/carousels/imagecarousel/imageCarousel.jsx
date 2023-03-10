// react
import { useState } from "react";

// material
import { Box, Button, Stack, IconButton, Skeleton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

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
  const { item, index, setPage, isLoading } = props;

  return (
    <div className="slide-wrapper">
      {isLoading || !item ? (
        <Skeleton variant="rounded" height={385} width="100%" />
      ) : (
        <img
          src={item.src}
          objectFit="cover"
          height={385}
          width="100%"
          alt="hero-carousel"
        />
      )}
      {!isLoading && <Box className="bg-overlay" />}
    </div>
  );
}

export default function ImageCarousel({ isLoading }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [page1, setPage1] = useState(0);
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
            isLoading={isLoading}
            item={product[imageIndex]}
            index={product[imageIndex]}
            activeStep={imageIndex}
            isActive={imageIndex}
            key={Math.random()}
            setPage={setPage}
          />
        </motion.div>
      </AnimatePresence>
      <Stack
        direction="row"
        justifyContent={product.length < 6 ? "center" : "left"}
        className="controls-wrapper"
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={1}
          className="controls-wrapper-btn"
        >
          {!isLoading && (
            <>
              {" "}
              <Button
                onClick={() => {
                  setPage([page - 1, page - 1]);
                }}
              >
                <ArrowBackIosIcon />
              </Button>
              <Button
                onClick={() => {
                  setPage([page + 1, page + 1]);
                }}
              >
                <ArrowForwardIosIcon />
              </Button>
            </>
          )}
        </Stack>
        {product.map((item, i) => (
          <Box
            key={Math.random()}
            className={`controls-button ${imageIndex === i ? "active" : ""}`}
            onClick={() => {
              setPage([i, i]);
            }}
            mx={1}
          >
            {isLoading ? (
              <Skeleton width={60} height={76} variant="rounded" />
            ) : (
              <img
                src={item.src}
                objectFit="cover"
                width={60}
                height={76}
                alt="hero-carousel"
              />
            )}
          </Box>
        ))}
      </Stack>
    </RootStyled>
  );
}
