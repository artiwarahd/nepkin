import { ExcalidrawElement } from "../element/types";
import { AppState } from "../types";
import { cleanAppStateForExport } from "../appState";

import { fileOpen, fileSave } from "browser-nativefs";
import { loadFromBlob } from "./blob";

export const serializeAsJSON = (
  elements: readonly ExcalidrawElement[],
  appState: AppState,
): string =>
  JSON.stringify(
    {
      type: "nepkin",
      version: 2,
      source: window.location.origin,
      elements: elements.filter((element) => !element.isDeleted),
      appState: cleanAppStateForExport(appState),
    },
    null,
    2,
  );

export const saveAsJSON = async (
  elements: readonly ExcalidrawElement[],
  appState: AppState,
  fileHandle: any,
) => {
  const serialized = serializeAsJSON(elements, appState);
  const blob = new Blob([serialized], {
    type: "application/json",
  });
  const name = `${appState.name}.nepkin`;
  (window as any).handle = await fileSave(
    blob,
    {
      fileName: name,
      description: "Nepkin file",
      extensions: ["nepkin"],
    },
    fileHandle || null,
  );
};

export const loadFromJSON = async () => {
  const blob = await fileOpen({
    description: "Nepkin files",
    extensions: ["json", "nepkin"],
    mimeTypes: ["application/json"],
  });
  return loadFromBlob(blob);
};
