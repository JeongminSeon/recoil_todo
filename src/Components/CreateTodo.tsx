import React from "react";
import { categoryState, todoListState } from "../atom";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";

interface iForm {
  todo: string;
}

export default function CreateTodo() {
  const { register, handleSubmit, setValue } = useForm<iForm>();
  const setTodoList = useSetRecoilState(todoListState);
  const category = useRecoilValue(categoryState);

  const onValid = ({ todo }: iForm) => {
    setTodoList((oldTodoList) => [
      {
        text: todo,
        id: Date.now(),
        category: category,
      },
      ...oldTodoList,
    ]);
    setValue("todo", "");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("todo", { required: true })}
        placeholder='Write a to do'
      />
      <button>Add</button>
    </form>
  );
}
