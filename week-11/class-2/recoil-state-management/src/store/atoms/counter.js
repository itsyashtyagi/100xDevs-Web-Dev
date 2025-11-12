import { atom } from "recoil";

export const counterAtom = atom({
  key: "counterKey",
  default: 0,
});
