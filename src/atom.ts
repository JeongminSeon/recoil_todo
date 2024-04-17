import { atom } from "recoil";

export enum Category {
  TO_DO = "TO_DO",
  DOING = "DOING",
  DONE = "DONE",
}

export interface ITodo {
  text: string;
  id: number;
  category: Category;
}

export const todoListState = atom<ITodo[]>({
  key: "todoListState",
  default: [],
});
