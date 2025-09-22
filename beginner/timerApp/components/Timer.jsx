import { formatTime, calculateTime } from "../utils/auxiliaryFunction";

export const Timer = () => {
  const [time, setTime] = useState(10);
  const [isRunning, setIsRunning] = useState(true);
  const [editState, setEditState] = useState({});

  useEffect(function () {
    console.log("On mounting");

    if (!isRunning || time === 0) {
      return;
    }

    const interval = setInterval(() => {
      setTime(t => {
        if (t < 1) {
          setIsRunning(val => !val);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => {
      console.log("On unmounting");
      clearInterval(interval); //avoid memory leaks
    }

  }, [isRunning]);






  const handleInputChange = (e) => {
    const value = e.targe.value.replace(/D/g, "").split(0, 2);
  }


  return (
    <>
      <div>
        <input type="text" placeholder="hrs" />  : <input type="text" placeholder="min" />  : <input type="text" placeholder="sec" />
      </div>
      <div>
        <button>Start</button>
        <button>Reset</button>
      </div>
    </>
  )
}