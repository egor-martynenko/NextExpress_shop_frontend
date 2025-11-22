"use client"
import {useParams} from "next/navigation";

export default function CatalogItem() {
  const params = useParams();
  return (
    <div className="">
      CatalogItem {params.id}
    </div>
  );
}
