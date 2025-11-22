"use client"
import { usePathname, useRouter, useSearchParams} from "next/navigation";
import {useCallback} from "react";

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname()
  const currentParam = searchParams.get('param');


  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    }, [searchParams]
  )
  return (
    <div className="flex flex-col mt-18 ml-4 mr-auto items-start">
      <button
        className={`text-xl transition-colors ${
          currentParam === "new"
            ? "text-purple-500"
            : " "
        }`}
        onClick={()=>{router.push(pathname + "?" + createQueryString('param', 'new'));}}>
        New
      </button>

      <button
        className={`text-xl transition-colors ${
          currentParam === "favorite"
            ? "text-purple-500"
            : " "
        }`}
        onClick={()=>{router.push(pathname + "?" + createQueryString('param', 'favorite'));
      }}>
        Favorite
      </button>

      <button
        className={`text-xl transition-colors ${
          currentParam === "best"
            ? "text-purple-500"
            : " "
        }`}
        onClick={()=>{router.push(pathname + "?" + createQueryString('param', 'best'));
      }}>
        Best
      </button>
    </div>
  );
};

export default Filter;