import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryListState } from "../atom";

interface iForm {
  category: string;
}

export default function CreateCategory() {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<iForm>();
  const setCategoryList = useSetRecoilState(categoryListState);
  const categoryList = useRecoilValue(categoryListState);

  const onValid = ({ category }: iForm) => {
    if (categoryList.includes(category)) {
      setError(
        "category",
        { message: "You already added this category!!" },
        { shouldFocus: true }
      );
    } else {
      setCategoryList((oldCategoryList) => [...oldCategoryList, category]);
    }
    setValue("category", "");
  };

  useEffect(() => {
    console.log(categoryList);
  }, [categoryList]);

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("category", { required: true })}
        placeholder='Write a Category '
      />
      <button>Add</button>
      <span>{errors?.category?.message}</span>
    </form>
  );
}
