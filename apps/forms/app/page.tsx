import { Button } from "@ds/ui";
import { Text } from "@ds/ui";

const HomePage = () => {
  return (
    <main className="p-8">
      <div className="flex justify-center">
        <Text size="2xl" color="secondary">{"Forms creating".toUpperCase()}</Text>
      </div>
      <Button>Click me</Button>
    </main>
  );
};

export default HomePage;