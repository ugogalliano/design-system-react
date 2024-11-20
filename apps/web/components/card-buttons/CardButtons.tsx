import React, { ReactElement } from "react";
import Card from "../../shared/card/Card";
import { Button } from "@repo/ui/components/button";

const commonClassButton = "max-w-32 mx-auto";

const buttons: ReactElement[] = [
  <Button size={"lg"} className={commonClassButton} key={0}>
    Button
  </Button>,
  <Button
    variant={"secondary"}
    size={"lg"}
    className={commonClassButton}
    key={1}
  >
    Button
  </Button>,
  <Button variant={"outline"} size={"lg"} className={commonClassButton} key={2}>
    Button
  </Button>,
  <Button disabled size={"lg"} className={commonClassButton} key={3}>
    Button
  </Button>,
];
const CardButtons = () => {
  return (
    <Card id="card-buttons" aria-label="Card Buttons" title="Buttons">
      <h1>Buttons</h1>
      <div className="grid grid-cols-4 mt-5">{buttons.map((item) => item)}</div>
    </Card>
  );
};

export default CardButtons;
