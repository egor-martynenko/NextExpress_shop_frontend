import Todolists from "@/components/Todolists";

const getTodolists = async ():Promise<{title: string}[]> => {
  const todolists = await fetch(`https://jsonplaceholder.typicode.com/todos`).then(res => res.json());
  return todolists;
}

export default async function Todos(){
  const todolists = getTodolists()
  return (
    <div className="flex items-center justify-center w-full mt-18 gap-12">
      <main>
          <Todolists todolists={todolists}/>
      </main>
    </div>
  )
}