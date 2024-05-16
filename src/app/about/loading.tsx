import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Skeleton className="h-[70vh] w-[70vw] cursor-progress absolute rounded-xl transition-all"></Skeleton>
  );
}
