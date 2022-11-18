import { get } from "./request";
export const findAll = () =>
  get({ url: "properties", params: { fields: "*,files.*" } });
