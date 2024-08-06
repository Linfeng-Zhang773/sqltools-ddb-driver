import { ILanguageServerPlugin } from "@sqltools/types";
import dolphindbDriver from "./driver";
import { DRIVER_ALIASES } from "../constants";

const dolphindbDriverPlugin :ILanguageServerPlugin = 
{
    register(server) {
        DRIVER_ALIASES.forEach(({value}) => {
            server.getContext().drivers.set(value, dolphindbDriver as any);
    });
},
};


export default dolphindbDriverPlugin;