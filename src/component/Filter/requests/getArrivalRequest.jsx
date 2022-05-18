import axios from "axios";

const getArrivalRequest = ({
  apiUrlArriving,
  setAllArriving,
  setIsPlanes,
  setLoading,
}) => {
  axios
    .get(apiUrlArriving)
    .then((resp) => {
      const allArriving = resp.data;
      setAllArriving(allArriving);
      setIsPlanes(true);
      setLoading(false);
    })
    .catch((e) => {
      setAllArriving(false);
      setIsPlanes(false);
      setLoading(false);
    });
};

export default getArrivalRequest;
