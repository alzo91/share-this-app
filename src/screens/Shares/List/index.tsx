import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";

import { Title } from "@components/atoms";
import { Page } from "@components/templates/page";
import { useAuth } from "@hooks/AuthHook";
import SharesService from "@services/shares";

import { ShareModel } from "src/models/ShareModel";
import ListItem from "./_components/ListItem";
import { useNavigation } from "@react-navigation/native";


export default function ListShares() {
  const [shares, setShares] = useState<ShareModel[]>([]);
  const [skip, setSkip] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>()
  const { user } = useAuth();
  const sharesServices = useMemo(() => new SharesService().getInstance(), []);

  const getShares = useCallback(async () => {
    console.log("list all shares", { skip });
    setLoading(true);
    /* const sharesSize = shares.length - 1;*/
    /** const lastID = skip > 1 ? shares[sharesSize].id : undefined;*/

    const data = await sharesServices.getAll({
      skip,
      order: "desc",
      take: 8,
      type: "all",
      userUuid: user?.uuid!,
    });

    if (data && skip > 1) setShares((state) => [...state, ...data]);
    else setShares([...data]);

    setLoading(false);
  }, [skip, shares]);

  useEffect(() => {
    if (skip >= 1) getShares();
  }, [skip]);

  const handleLoadShares = useCallback(() => {
    console.log("handleLoadShares");
    setSkip((state) => state + 1);
  }, []);

  const handleRefreshes = useCallback(() => {
    setSkip(1);
  }, []);

  const goToEditShare = useCallback((id: string) => {
    navigation.navigate("EditShare",{params: {id},id})
  },[])

  return (
    <Page>
      <View style={{ paddingHorizontal: 16 }}>
        <Title text="My list / My shares" />
      </View>
      <FlatList<ShareModel>
        keyExtractor={(item) => item.id}
        data={shares}
        style={{ flex: 1, padding: 8 }}
        onEndReached={shares.length > 7 ? handleLoadShares : null}
        onEndReachedThreshold={0.3}
        refreshing={loading}
        refreshControl={
          <RefreshControl
            colors={["#0F0704"]}
            refreshing={loading}
            onRefresh={handleRefreshes}
          />
        }
        renderItem={({ item, index }) => (
          <ListItem key={`${item.id}-${index}`} index={index} item={item} onPress={() => goToEditShare(item.id)} />
        )}
      />
    </Page>
  );
}
