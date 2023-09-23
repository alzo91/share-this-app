import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import { View } from "react-native";

export default function ListItemSkeleton() {
  return (
    <MotiView transition={{ type: "timing" }} style={{ flexDirection: "row" }}>
      <Skeleton height={190} width={130} colorMode="light" />
      <View style={{ width: 5 }} />
      <Skeleton height={190} width={130} colorMode="light" />
      <View style={{ width: 5 }} />
      <Skeleton height={190} width={130} colorMode="light" />
    </MotiView>
  );
}
