import React from "react";
import ColorsSection from "../../shared/colors-section/ColorsSection";
import Card from "../../shared/card/Card";

const CardColors = () => {
  return (
    <Card id="card-colors" aria-label="Card Colors">
      <h1>Colors</h1>
      <ColorsSection title="Black" aria-label="Section colors black" />
      <ColorsSection title="Primary" aria-label="Section colors primary" />
      <ColorsSection title="Grey" aria-label="Section colors grey" />
      <ColorsSection title="Success" aria-label="Section colors success" />
      <ColorsSection title="Danger" aria-label="Section colors danger" />
      <ColorsSection title="Warning" aria-label="Section colors warning" />
      <ColorsSection title="Info" aria-label="Section colors info" />
    </Card>
  );
};

export default CardColors;
