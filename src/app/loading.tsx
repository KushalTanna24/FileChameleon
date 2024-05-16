import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Skeleton className="h-[60vh] w-[60vw] cursor-progress absolute rounded-xl transition-all"></Skeleton>
  );
}
