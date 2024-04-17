import React from "react";
import { Category, todoListState } from "../atom";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";

interface iForm {
  todo: string;
}

export default function CreateTodo() {
  const { register, handleSubmit, setValue } = useForm<iForm>();
  const setTodoList = useSetRecoilState(todoListState);

  const onValid = ({ todo }: iForm) => {
    setTodoList((oldTodoList) => [
      {
        text: todo,
        id: Date.now(),
        category: Category.TO_DO,
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
