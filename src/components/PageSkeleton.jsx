import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

const PageSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#C9B086" highlightColor="#D8C097">
      <div className="container mx-auto content-center py-2 flex justify-center px-1">
        <div className="flex w-96 flex-col justify-center items-center gap-4 p-6 rounded-lg bg-dun shadow-lg shadow-yellow-700 ring ring-yellow-500">
          <Skeleton
            circle={true}
            height={200}
            width={200}
            className="object-cover object-top w-52 h-52 rounded-full mb-5 shadow-lg"
          />
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div className="flex flex-col gap-2 items-center" key={index}>
                <Skeleton
                  className="text-xl text-harrypotterdarkbrown font-bold text-center"
                  width={100}
                />
                <Skeleton
                  className="text-xl text-harrypotterdarkbrown text-center"
                  width={200}
                />
              </div>
            ))}
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default PageSkeleton;
