import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useWhiteMode = (initialValue) => {
    const [whiteMode, setWhiteMode] = useLocalStorage("whiteMode", initialValue);

    useEffect( () => {
        if(whiteMode) {
            document.body.classList.add("white-mode");
        }
        else {
            document.body.classList.remove("white-mode");
        }
    }, [whiteMode])

    return [whiteMode, setWhiteMode]
}