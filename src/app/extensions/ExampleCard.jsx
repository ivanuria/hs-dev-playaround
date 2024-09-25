import React from "react";
import { Button, List, Text, Link, Alert } from "@hubspot/ui-extensions";
import { hubspot } from "@hubspot/ui-extensions";
import { axios } from "axios";

hubspot.extend(() => <Extension />);

const Extension = () => {
  return (
    <>
      <Text>
        Congrats! You just deployed your first App card. What's next? Here are
        some pointers to get you started:
      </Text>
      <Button
        onClick={() => axios.post("https://c9421f8b-cd8d-4fae-8201-0fb4593d1e2b.mock.pstmn.io", {
          "hola": "caracola"
        })}
      >Click me!</Button>
      <List variant="unordered-styled">
        <Link href="https://developers.hubspot.com/docs/platform/ui-components">
          📖 Explore our library of UI components
        </Link>
        <Link href="www.developers.hubspot.com">
          📖 Learn more about utilities to help you build better extensions
        </Link>
        <Link href="github.com/hubspot/ui-extensions-examples">
          📖 Get inspired by private app code samples
        </Link>
         <Link href="https://ecosystem.hubspot.com/marketplace/apps/app-cards">
          📖 Look at the Marketplace collection of apps that contain app cards
        </Link>
        <Link href="https://ecosystem.hubspot.com/marketplace/apps/app-cards">
          ▶️ Find resources to learn more
        </Link>
        <Link href="https://developers.hubspot.com/slack">
          ▶️ Connect with developers on #ui-extensions channel on developer Slack community
        </Link>
      </List>
    </>
  );
};
