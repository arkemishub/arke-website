import React from "react";
import { useLottie } from "lottie-react";

interface Props {
  animation: any;
}

const LottieAnimation = (props: Props) => {
  const { animation } = props;

  const options = {
    animationData: animation,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default LottieAnimation;
