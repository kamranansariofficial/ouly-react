import React from "react";
// components
import RootStyled from "./styled";
import { Typography, LinearProgress, Link, Box, Button } from "@mui/material";

export default function Payment({ handleClose, success }) {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <RootStyled>
      {success ? (
        <>
          {loading ? (
            <Box className="failed">
              <img
                src="/static/images/failed.png"
                alt="payment-processing"
                height="121px"
              />
              <Typography variant="h2">Payment Failed</Typography>
              <Typography
                variant="h4"
                fontWeight={400}
                color="text.secondary"
                mt={1}
                mb={5}
              >
                Your card has insufficient funds.
              </Typography>
              <Link href="#" onClick={handleClose}>
                <Typography variant="h4">Go Back</Typography>
              </Link>
            </Box>
          ) : (
            <Box className="processing-error">
              <img
                src="/static/images/error.png"
                alt="payment-processing"
                height="131px"
              />
              <Typography variant="h2" color="error">
                Error
              </Typography>
              <Typography
                variant="h4"
                fontWeight={400}
                color="text.secondary"
                mt={1}
                mb={5}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </Typography>
              <Button variant="text" color="secondary" onClick={handleClose}>
                Go Back
              </Button>
              <Button
                variant="text"
                color="error"
                className="error-btn"
                onClick={handleClose}
              >
                <Typography variant="h4" color="error">
                  retry
                </Typography>
              </Button>
            </Box>
          )}
        </>
      ) : (
        <>
          {loading ? (
            <Box className="processing">
              <img
                src="/static/images/payment-processing.png"
                alt="payment-processing"
                height="294px"
              />
              <Typography variant="h2">
                Your payment is Being processed.
              </Typography>
              <Typography
                variant="h4"
                fontWeight={400}
                color="text.secondary"
                mt={1}
              >
                Please wait...
              </Typography>
              <LinearProgress variant="determinate" value={progress} />
              <Link href="#" onClick={handleClose}>
                <Typography variant="h4">Go Back</Typography>
              </Link>
            </Box>
          ) : (
            <Box className="processing-successful">
              <img
                src="/static/images/payment-successful.png"
                alt="payment-processing"
                height="180px"
              />
              <Typography variant="h2">Payment Successful.</Typography>
              <Typography
                variant="h4"
                fontWeight={400}
                color="text.secondary"
                mt={1}
                mb={5}
              >
                Thank you for your payment. We will be in contract with
                <br /> more details shortly
              </Typography>
              <Link href="#" onClick={handleClose}>
                <Typography variant="h4">Go Back</Typography>
              </Link>
            </Box>
          )}
        </>
      )}
    </RootStyled>
  );
}
