import React, { useEffect } from "react";
import { ITodo, categoryListState, todoListState } from "../atom";
import { useRecoilState, useRecoilValue } from "recoil";

// button을 클릭하면 todo의 category가 변경
// findindex를 이용해 변경
// slice를 이용해 old Todo List를 수정해준다.

export default function Todo({ text, id, category }: ITodo) {
  // set과 get을 둘 다 사용할 때는 todoListState를 사용한다.
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const categoryList = useRecoilValue(categoryListState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    console.log(name);
    const index = todoList.findIndex((todo) => todo.id === id);
    const newTodo = { text, id, category: name };
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

      {categoryList
        .filter((filter) => filter !== category)
        .map((item) => (
          <button name={item} onClick={onClick}>
            {item}
          </button>
        ))}
    </div>
  );
}
