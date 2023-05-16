import React from "react";
import { useLottie } from "lottie-react";

interface Props {
  animation: any;
}

const App = (props: Props) => {
  const { animation } = props;

  const options = {
    animationData: animation,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default App;
