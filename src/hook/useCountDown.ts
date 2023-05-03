import { useCallback, useEffect, useState } from "react";

const useCountDown = () => {
    const [countDown, setCountDown] = useState(3);
    const [timer, setTimer] = useState(-9);
    const timeOutCallback = useCallback(
      () => setTimer((currTimer) => currTimer + 1),
      []
    );
  
    useEffect(() => {
      if (countDown > 0) {
        const interval = setInterval(() => setCountDown((c) => c - 1), 700);
        return () => clearInterval(interval);
      }
      if (countDown === 0 && timer < 100) setTimeout(timeOutCallback, 5);
    }, [countDown, timer, timeOutCallback]);
    

    return {countDown, timer}
}

export default useCountDown;