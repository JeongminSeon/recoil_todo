import { atom, selector } from "recoil";
import persistAtom from "./persist";

// export enum Category {
//   TO_DO = "TO_DO",
//   DOING = "DOING",
//   DONE = "DONE",
// }

export interface ITodo {
  text: string;
  id: number;
  category: string;
}

export const todoListState = atom<ITodo[]>({
  key: "todoListState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const categoryListState = atom<string[]>({
  key: "categoryListState",
  default: ["TO_DO", "DOING", "DONE"],
  effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom({
  key: "categoryState",
  default: "TO_DO",
});

export const filteredTodoListState = selector({
  key: "filteredTodoLisState",
  get: ({ get }) => {
    const category = get(categoryState);
    const todoList = get(todoListState);

    return todoList.filter((todo) => todo.category === category);
  },
});
