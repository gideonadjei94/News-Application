import { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "451c57eec30e9385a287d29b8f88686d2e956eca572e1d8b807a3e2338fdd0dc/stage";
function App() {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, news }) => {
        if (command === "newHeadLines") {
          console.log(news);
        }
      },
    });
  }, []);
  return (
    <div className="App">
      <h1>Alan AI News Application</h1>
    </div>
  );
}

export default App;
