import { Label, Title } from "@components/atoms";
import { View, StyleSheet } from "react-native";

interface NoticesProps {
  backgroundColor: string;
  textColor?: string;
}
export default function Notices({ backgroundColor, textColor }: NoticesProps) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor,
      padding: 15,
      marginVertical: 10,
      borderRadius: 15,
    },
  });

  return (
    <View style={styles.container}>
      <Title
        text="What do you think to share?"
        fontSize={12}
        color={textColor}
      />
      <Label
        text="Know, you can share some items that you want and it easier to split with everyone!"
        color={textColor}
      />
    </View>
  );
}
