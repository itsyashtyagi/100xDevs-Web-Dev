import { atom, selector } from "recoil";

export const counterAtom = atom({
  key: "counterKey",
  default: 0,
});

export const evenSelector = selector({
  key: "evenSelectorKey",
  get: ({ get }) => {
    const currentCount = get(counterAtom);
    return currentCount % 2 == 0;
  },
});
