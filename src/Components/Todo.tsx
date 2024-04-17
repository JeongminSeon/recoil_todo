import React, { useEffect } from "react";
import { Category, ITodo, todoListState } from "../atom";
import { useRecoilState } from "recoil";

// button을 클릭하면 todo의 category가 변경
// findindex를 이용해 변경
// slice를 이용해 old Todo List를 수정해준다.

export default function Todo({ text, id, category }: ITodo) {
  // set과 get을 둘 다 사용할 때는 todoListState를 사용한다.
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    console.log(name);
    const index = todoList.findIndex((todo) => todo.id === id);
    const newTodo = { text, id, category: name as Category };
    setTodoList((oldTodoList) => {
      return [
        ...oldTodoList.slice(0, index),
        newTodo,
        ...oldTodoList.slice(index + 1),
      ];
    });
  };

  return (
    <div>
      <span> {text} </span>
      {category !== "TO_DO" && (
        <button name={Category.TO_DO} onClick={onClick}>
          TODO
        </button>
      )}
      {category !== "DOING" && (
        <button name={Category.DOING} onClick={onClick}>
          DOING
        </button>
      )}
      {category !== "DONE" && (
        <button name={Category.DONE} onClick={onClick}>
          DONE
        </button>
      )}
    </div>
  );
}
