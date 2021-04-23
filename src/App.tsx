import React from "react";
import { Stack } from "@chakra-ui/layout";
import { Redirect, Route, Switch } from "react-router";

import Layout from "./Layout";
import FeedScreen from "./screen/Feed";
import MessagesScreen from "./screen/Messages";
import ExploreScreen from "./screen/Explore";
import MoreScreen from "./screen/More";
import NotificationScreen from "./screen/Notification";
import ProfileScreen from "./screen/Profile";
import SavedScreen from "./screen/Saved";
import ListScreen from "./screen/List";

const App: React.FC = () => {
  return (
    <Layout>
      <Stack direction="row">
        <Switch>
          <Route exact component={FeedScreen} path="/" />
          <Route exact component={ExploreScreen} path="/explore" />
          <Route exact component={NotificationScreen} path="/notifications" />
          <Route exact component={MessagesScreen} path="/messages" />
          <Route exact component={SavedScreen} path="/saved" />
          <Route exact component={ListScreen} path="/lists" />
          <Route exact component={ProfileScreen} path="/profile" />
          <Route exact component={MoreScreen} path="/more" />
          <Redirect to="/" />
        </Switch>
      </Stack>
    </Layout>
  );
};

export default App;
