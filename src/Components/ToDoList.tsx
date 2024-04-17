import React, { FormEvent } from "react";
import Todo from "./Todo";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  categoryListState,
  categoryState,
  filteredTodoListState,
} from "../atom";
import CreateTodo from "./CreateTodo";
import CreateCategory from "./CreateCategory";

/*
    TodoList 기능 정리

    Todo -> id, text, category를 갖는다.
    category는 TODO, DONE, DOING을 갖는다.

    1. react-hook-form을 이용해서 Todo를 저장받는다. -> CreateTodo로 Compoenet 분할
    2. recoil을 이용하여 todo 저장
    3. 카테고리별로 TodoList를 보여준다. (TodoList에서 보여줌) -> Recoil Selector 사용
    4. 각 Todo는 Todo Component를 선언해서 사용

  */

export default function ToDoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  const setCategory = useSetRecoilState(categoryState);
  const categoryList = useRecoilValue(categoryListState);

  const onInput = (event: FormEvent<HTMLSelectElement>) => {
    // console.log(event.currentTarget.value);
    const {
      currentTarget: { value },
    } = event;

    setCategory(value);
  };

  return (
    <div>
      <select onInput={onInput}>
        {categoryList.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <CreateCategory />
      <CreateTodo />

      {todoList.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}
