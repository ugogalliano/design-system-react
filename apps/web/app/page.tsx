import CardColors from "../components/card-colors/CardColors";
import CardButtons from "../components/card-buttons/CardButtons";
import { Input } from "@repo/ui/components/input";
import Card from "../shared/card/Card";

const Home = () => {
  return (
    <>
      <Card>
        <Input variant={"outline"} label="Label" helperText="Helper Text" />
      </Card>
      {/*   <CardButtons />
      <CardColors /> */}
    </>
  );
};

export default Home;
