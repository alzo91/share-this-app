import { ImageBackground, View } from "react-native";
import { Bagged, Container, Content, styles } from "./styles";
import { IMAGES } from "@assets/index";
import { Label } from "@components/atoms";

interface ListItemProps {
  id: string;
  quantity: number;
  textColor: string;
  createdAt: Date;
  description: string;
  backgroundImage?: string;
}
function ListItem({
  id,
  createdAt,
  quantity,
  textColor,
  description,
  backgroundImage,
}: ListItemProps) {
  return (
    <Container key={id}>
      <ImageBackground
        resizeMode="cover"
        source={
          //@ts-ignore
          backgroundImage ? IMAGES[backgroundImage] : IMAGES.backgroundBlue
        }
        style={styles.image}
      >
        <Content>
          <Bagged width={70}>
            <Label text={`${quantity} items`} color={textColor} />
          </Bagged>
          <Bagged width={85}>
            <Label
              color={textColor}
              text={`${createdAt.toLocaleString("pt-br", {
                day: "2-digit",
                month: "short",
              })}`}
            />
          </Bagged>
        </Content>
      </ImageBackground>
      <View style={{ marginVertical: 3 }}>
        <Label text={description} fontSize={12} numberOfLines={2} />
      </View>
    </Container>
  );
}

export default ListItem;
