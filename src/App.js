// Components
import Box from "@material-ui/core/Box";
// import Typography from "@material-ui/core/Typography";
import { useCallback, useState } from "react";
import Milkdown from "./components/index";

import "./index.css";

export default function App() {
  const [content, setContent] = useState("");

  const onTextChange = useCallback((ev) => {console.log(ev); setContent(ev)}, []);

  return (
    <div className="App">
      <Box>
        <Milkdown onChange={onTextChange} value={content} />
      </Box>
    </div>
  );
}
