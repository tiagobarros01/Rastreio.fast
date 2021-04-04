import { useState } from "react";
import api from "../../services/api";

const TrackOrder = () => {
  const [code, setCode] = useState("OO135195662BR");
  const [trackingData, setTrackingData] = useState();

  async function getTrackingData() {
    const { data } = await api.get(`v1?codigo=${code}`);

    setTrackingData(data[0].descricao);
    console.log(data[0]);
  }

  return (
    <div>
      <input
        type="text"
        value={code}
        onChange={(event) => setCode(event.target.value)}
      />
      <button onClick={getTrackingData}>Track order</button>
      {trackingData}
    </div>
  );
};

export default TrackOrder;
