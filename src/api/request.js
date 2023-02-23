import axios from "axios";
export const BASEURL = `${process.env.VUE_APP_API_URL}`;

// for directus封裝
export const get = async ({
  type = "items",
  collection = "",
  params = { fields: "*,files.*", meta: "" },
}) => {
  const token = localStorage.getItem(`${process.env.VUE_APP_TOKEN_ID}`);
  console.log("get token", token);
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    axios.defaults.headers.common["Authorization"] = ``;
  }
  try {
    const { data, status } = await axios.get(
      `${BASEURL}/${type}/${collection}`,
      {
        params,
      }
    );
    onSuccess(data, status);
    if (params.meta != "") {
      return data;
    }
    return data;
  } catch (error) {
    onError(error);
    handleErrorMsg(error.response.status);
    return false;
  }
};

// for directus 會回傳一個圖片asset用的url
export const assetURL = (assetID, params = { quality: null, width: null }) => {
  // quality=${params.quality}&width=${params.width}
  const quality = params.quality ? `quality=${params.quality}` : "";
  const width = params.width ? `width=${params.width}` : "";
  return `${BASEURL}/assets/${assetID}?${quality}&${width}`;
};

function onSuccess(data, status) {
  console.log(
    `%cGET ${status}`,
    "font-weight:bold;border:1px solid white;padding:0.3rem 1rem;background-color:green;border-radius:1rem"
  );
  console.log(data);
}

function onError(error) {
  console.log(
    `%cGET ${error.response.status}`,
    "font-weight:bold;border:1px solid white;padding:0.3rem 1rem;background-color:red;border-radius:1rem"
  );
  console.log(error.response.data.errors[0].message);
}

function handleErrorMsg(status) {
  // const global = globalStore();
  // const map = {
  //   401: "登入資料錯誤",
  // };
  // global.text = map[status];
  // global.show = true;
  // return map[status] ? map[status] : "系統錯誤";
}
