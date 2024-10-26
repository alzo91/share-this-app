import { Label, Title } from "@components/atoms";
import { Screen } from "@components/templates/screen";
import { useNavigation, useRoute } from "@react-navigation/native";
import SharesService from "@services/shares";
import React, { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import { ShareModel } from "src/models/ShareModel";

type EditShareProps = React.PropsWithChildren & {};

function EditShare(props: EditShareProps) {
  const [currentShare, setCurrentShare] = useState<ShareModel | undefined>(
    undefined
  );
  const { params } = useRoute();
  const id = params.params.id;

  const sharesServices = useMemo(() => new SharesService().getInstance(), []);

  useEffect(() => {
    sharesServices.getOne(id).then((result) => setCurrentShare(result));
  }, [id]);

  return (
    <Screen lightScreen>
      <Title text="Edit Share" />
      <Label text={currentShare?.name ?? ""} />
      <Label text={currentShare?.description ?? ""} />
    </Screen>
  );
}

export default EditShare;
