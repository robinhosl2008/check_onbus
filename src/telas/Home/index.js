import { React } from "react";

import Topo from "./componentes/Topo";
import Campanhas from "./componentes/Campanhas"

export default function Home() {
    return <Campanhas topo={Topo} />
} 