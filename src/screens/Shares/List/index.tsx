import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";

import { Title } from "@components/atoms";
import { Page } from "@components/templates/page";
import SharesService from "@services/shares";

import { ShareModel } from "src/models/ShareModel";
import ListItem from "./_components/ListItem";
import { emptyFunction } from "@utils/emptyFunction";

export default function ListShares() {
  const [shares, setShares] = useState<ShareModel[]>([]);
  const [skip, setSkip] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  const sharesServices = useMemo(() => new SharesService().getInstance(), []);

  const getShares = useCallback(async () => {
    console.log("list all shares", { skip });
    setLoading(true);
    const sharesSize = shares.length - 1;
    const lastID = skip > 1 ? shares[sharesSize].id : undefined;

    const data = await sharesServices.getAll({
      skip,
      order: "desc",
      take: 8,
      type: "all",
      lastID,
    });
    if (data) setShares((state) => [...state, ...data]);
    setLoading(false);
  }, [skip, shares]);

  useEffect(() => {
    if (skip >= 1) getShares();
  }, [skip]);

  const handleLoadShares = useCallback(() => {
    console.log("handleLoadShares");
    setSkip((state) => state + 1);
  }, []);

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
            onRefresh={emptyFunction}
          />
        }
        renderItem={({ item, index }) => (
          <ListItem key={`${item.id}-${index}`} index={index} {...item} />
        )}
      />
    </Page>
  );
}
