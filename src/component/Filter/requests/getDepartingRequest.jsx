import axios from "axios";

const getDepartingRequest = ({
  apiUrlDeparting,
  setAllDeparting,
  setIsPlanes,
  setLoading,
}) => {
  axios
    .get(apiUrlDeparting)
    .then((resp) => {
      const allDeparting = resp.data;
      setAllDeparting(allDeparting);
      setIsPlanes(true);
      setLoading(false);
    })
    .catch((e) => {
      setAllDeparting(false);
      setIsPlanes(false);
      setLoading(false);
    });
};

export default getDepartingRequest;
