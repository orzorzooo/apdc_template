import axios from "axios";
export const BASEURL = `${process.env.VUE_APP_API_URL}`;

// for directus封裝
export const get = async ({ type = "items", url = "", params = {} }) => {
  try {
    const { data } = await axios.get(`${BASEURL}/${type}/${url}`, { params });
    console.log(
      "%cREQUEST GET",
      "border:1px solid white;padding:0.3rem 1rem;background-color:green;border-radius:1rem"
    );
    console.log(data);

    return data.data;
  } catch (error) {
    console.log(error.message);
  }
};

// for directus 會回傳一個圖片asset用的url
export const assetURL = (assetID, params = { quality: null, width: null }) => {
  // quality=${params.quality}&width=${params.width}
  const quality = params.quality ? `quality=${params.quality}` : "";
  const width = params.width ? `width=${params.width}` : "";
  return `${BASEURL}/assets/${assetID}?${quality}&${width}`;
};
