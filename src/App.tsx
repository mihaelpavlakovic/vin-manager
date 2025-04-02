import { Toaster } from "sonner";
import { TypographyH1 } from "./components/typography/TypographyH1";

function App() {
  return (
    <div className="flex items-center justify-center h-dvh">
      <TypographyH1>Vin-Manager App</TypographyH1>

      <Toaster />
    </div>
  );
}

export default App;
