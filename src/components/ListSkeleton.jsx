import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

const ListSkeleton = ({ cards }) => {
  return (
    <SkeletonTheme baseColor="#C9B086" highlightColor="#D8C097">
      <div className="flex flex-wrap items-center justify-center gap-8">
        {Array(cards)
          .fill(0)
          .map((_, i) => (
            <div
              className="flex flex-col justify-between items-center rounded-lg bg-dun shadow-md w-64 h-80"
              key={i}
            >
              <Skeleton
                className="rounded-t-lg mb-2 min-h-52 max-h-52 w-full object-cover object-top"
                height={208}
                width={250}
              />
              <div className="flex flex-col h-36 p-2 items-center justify-center">
                <Skeleton className="text-xl text-center" width={150} />
                <Skeleton className="text-md text-yellow-900" width={100} />
              </div>
            </div>
          ))}
      </div>
    </SkeletonTheme>
  );
};

export default ListSkeleton;
