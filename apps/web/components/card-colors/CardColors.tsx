import React from "react";
import ColorsSection from "../../shared/colors-section/ColorsSection";
import Card from "../../shared/card/Card";

const CardColors = () => {
  return (
    <Card>
      <h1>Colors</h1>
      <ColorsSection title="Black" />
      <ColorsSection title="Primary" />
      <ColorsSection title="Grey" />
      <ColorsSection title="Success" />
      <ColorsSection title="Danger" />
    </Card>
  );
};

export default CardColors;
