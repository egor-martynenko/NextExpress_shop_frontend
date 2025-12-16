"use client"

import {use} from "react";

type Props = {
  todolists: Promise<{title: string}[]>
}
const Todolists = ({todolists}: Props) => {
const todos = use(todolists)
  return (
    <div>
      <h2 className={'text-xl mb-4'}>TodoLists</h2>
      {todos.map(todolist => (
        <div key={todolist.title}>{todolist.title}</div>
      ))}
    </div>
  );
};

export default Todolists;