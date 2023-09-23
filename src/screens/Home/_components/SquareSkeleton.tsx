import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";

export default function SquareSkeleton() {
  return (
    <MotiView
      transition={{ type: "timing" }}
      style={{ flexDirection: "row", justifyContent: "space-evenly" }}
    >
      <Skeleton height={58} width={58} colorMode="light" />
      <Skeleton height={58} width={58} colorMode="light" />
      <Skeleton height={58} width={58} colorMode="light" />
      <Skeleton height={58} width={58} colorMode="light" />
    </MotiView>
  );
}
