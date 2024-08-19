import axios from "axios";

const setItemWithExpiration = (
  key: string,
  value: string,
  expirationMinutes: number
) => {
  const expiration = Date.now() + expirationMinutes * 60 * 1000;
  localStorage.setItem(key, JSON.stringify({ value, expiration }));
};

const getItemFromStorage = (key: string) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  const { value, expiration } = JSON.parse(itemStr);
  if (Date.now() > expiration) {
    localStorage.removeItem(key);
    return null;
  }

  return value;
};

export const getItem = async (
  key: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  isImage: boolean,
  collname?: string,
  queryname?: string
) => {
  const cachedValue = getItemFromStorage(key);
  if (cachedValue) {
    setValue(cachedValue);
    return;
  }

  try {
    let value: string;

    if (!isImage) {
      const result = await axios.get(`http://127.0.0.1:8080/getuservalue/${key}`);
      value = result.data.data;
    } else if (collname && queryname) {
      const response = await axios.get(
        `http://127.0.0.1:8080/getimage/${collname}/${queryname}`,
        { responseType: "arraybuffer" }
      );
      const base64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      value = `data:image/jpeg;base64,${base64}`;
    } else {
      console.error("Missing collname or queryname for image request");
      return;
    }

    setValue(value);
    setItemWithExpiration(key, value, 15);

  } catch (error) {
    console.error(`Error fetching ${isImage ? "image" : "data"}:`, error);
  }
};
