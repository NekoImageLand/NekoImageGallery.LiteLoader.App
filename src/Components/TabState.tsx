import {useState} from "react";

export function useTabState(defaultTab = 0) {
    const [tab, setTab] = useState(defaultTab);
    return { tab, setTab };
}