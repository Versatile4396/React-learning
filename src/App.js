import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, adToNum } from "./store/modules/counterStore";
import { fetchChannelList } from "./store/modules/channelStore";
import { useEffect } from "react";
function App() {
  const { count } = useSelector((state) => state.counter);
  const { channelList } = useSelector((state) => state.channelList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChannelList());
  }, [dispatch]);
  return (
    <div>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(adToNum(20))}>goto20</button>
      <ul>
        {channelList.map((item) => (
          <li key={item.key}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
