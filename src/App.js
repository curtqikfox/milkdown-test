// Components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useCallback, useState } from "react";
import Milkdown from "./components/index";

import "./index.css";

export default function App() {
  const [content, setContent] = useState("");

  const onTextChange = useCallback((ev) => setContent(ev), []);

  return (
    <div className="App">
      <Box>
        <Typography variant="subtitle1" className="title">
          Input here content
        </Typography>
        <Milkdown onChange={onTextChange} value={content} />
      </Box>
    </div>
  );
}
