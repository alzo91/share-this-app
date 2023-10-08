import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList } from "react-native";

import { Title } from "@components/atoms";
import { Page } from "@components/templates/page";
import SharesService from "@services/shares";

import { ShareModel } from "src/models/ShareModel";
import ListItem from "./_components/ListItem";

export function ListShares() {
  const [shares, setShares] = useState<ShareModel[]>([]);
  const [skip, setSkip] = useState<number>(1);

  const sharesServices = useMemo(() => new SharesService().getInstance(), []);

  const getShares = useCallback(async () => {
    console.log("list all shares", { skip });
    const lastID = skip > 1 ? shares.reverse()[0].id : undefined;

    const data = await sharesServices.getAll({
      skip,
      order: "desc",
      take: 6,
      type: "all",
      lastID,
    });
    if (data) setShares((state) => [...state, ...data]);
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
      <Title text="My list / My shares" />
      <FlatList<ShareModel>
        keyExtractor={(item) => item.id}
        data={shares}
        onEndReached={shares.length > 5 ? handleLoadShares : null}
        onEndReachedThreshold={0.3}
        renderItem={({ item, index }) => (
          <ListItem key={`${item.id}-${index}`} index={index} {...item} />
        )}
      />
    </Page>
  );
}
