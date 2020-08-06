import React from "react";
import { AppState } from "../types";
import { ExcalidrawElement } from "../element/types";
import { ActionManager } from "../actions/manager";
import { hasBackground, hasStroke, hasText, getTargetElement } from "../scene";
import { t } from "../i18n";
import { SHAPES } from "../shapes";
import { ToolButton } from "./ToolButton";
import { capitalizeString, setCursorForShape } from "../utils";
import Stack from "./Stack";
import useIsMobile from "../is-mobile";
import { getNonDeletedElements } from "../element";

export const SelectedShapeActions = ({
  appState,
  elements,
  renderAction,
  elementType,
}: {
  appState: AppState;
  elements: readonly ExcalidrawElement[];
  renderAction: ActionManager["renderAction"];
  elementType: ExcalidrawElement["type"];
}) => {
  const targetElements = getTargetElement(
    getNonDeletedElements(elements),
    appState,
  );
  const isEditing = Boolean(appState.editingElement);
  const isMobile = useIsMobile();

  return (
    <div className="panelColumn">
      {renderAction("changeStrokeColor")}
      {(hasBackground(elementType) ||
        targetElements.some((element) => hasBackground(element.type))) && (
        <>
          {renderAction("changeBackgroundColor")}

          {/* renderAction("changeFillStyle") */}
        </>
      )}

      {(hasStroke(elementType) ||
        targetElements.some((element) => hasStroke(element.type))) && (
        <>
          {renderAction("changeStrokeWidth")}
          {renderAction("changeStrokeStyle")}
          {/* renderAction("changeSloppiness") */}
        </>
      )}

      {(hasText(elementType) ||
        targetElements.some((element) => hasText(element.type))) && (
        <>
          {renderAction("changeFontSize")}

          {renderAction("changeFontFamily")}

          {renderAction("changeTextAlign")}
        </>
      )}

      {renderAction("changeOpacity")}

      <fieldset>
        <legend>{t("labels.layers")}</legend>
        <div className="buttonList no-bg">
          {renderAction("sendToBack")}
          {renderAction("sendBackward")}
          {renderAction("bringToFront")}
          {renderAction("bringForward")}
        </div>
      </fieldset>
      {!isMobile && !isEditing && targetElements.length > 0 && (
        <fieldset>
          <legend>{t("labels.actions")}</legend>
          <div className="buttonList">
            {renderAction("duplicateSelection")}
            {renderAction("deleteSelectedElements")}
            {renderAction("group")}
            {renderAction("ungroup")}
          </div>
        </fieldset>
      )}
    </div>
  );
};

const LIBRARY_ICON = (
  <svg id="Templates" width="22" height="18" viewBox="0 0 22 18">
    <g
      id="Rectangle_65"
      data-name="Rectangle 65"
      fill="none"
      stroke="#08264a"
      strokeWidth="1.5"
    >
      <rect width="22" height="18" stroke="none" />
      <rect x="0.75" y="0.75" width="20.5" height="16.5" fill="none" />
    </g>
    <path
      id="Path_58"
      data-name="Path 58"
      d="M2811.075,540.844h20.044"
      transform="translate(-2810.175 -533.985)"
      fill="none"
      stroke="#08264a"
      strokeWidth="1.5"
    />
    <path
      id="Path_60"
      data-name="Path 60"
      d="M2811.075,540.844h13.372"
      transform="translate(-2810.175 -528.646)"
      fill="none"
      stroke="#08264a"
      strokeWidth="1.5"
    />
    <path
      id="Path_59"
      data-name="Path 59"
      d="M10.694,0H0"
      transform="translate(14.272 6.843) rotate(90)"
      fill="none"
      stroke="#08264a"
      strokeWidth="1.5"
    />
  </svg>
);

export const ShapesSwitcher = ({
  elementType,
  setAppState,
  isLibraryOpen,
}: {
  elementType: ExcalidrawElement["type"];
  setAppState: (appState: Partial<AppState>) => void;
  isLibraryOpen: boolean;
}) => (
  <>
    {SHAPES.map(({ value, icon, key }, index) => {
      const label = t(`toolBar.${value}`);
      const shortcut = `${capitalizeString(key)} ${t("shortcutsDialog.or")} ${
        index + 1
      }`;
      return (
        <ToolButton
          key={value}
          type="radio"
          icon={icon}
          checked={elementType === value}
          name="editor-current-shape"
          title={`${capitalizeString(label)} — ${shortcut}`}
          keyBindingLabel={`${index + 1}`}
          aria-label={capitalizeString(label)}
          aria-keyshortcuts={`${key} ${index + 1}`}
          data-testid={value}
          onChange={() => {
            setAppState({
              elementType: value,
              multiElement: null,
              selectedElementIds: {},
            });
            setCursorForShape(value);
            setAppState({});
          }}
        />
      );
    })}
    <ToolButton
      type="button"
      icon={LIBRARY_ICON}
      name="editor-library"
      keyBindingLabel="0"
      aria-keyshortcuts="0"
      title={`${capitalizeString(t("toolBar.library"))} — 0`}
      aria-label={capitalizeString(t("toolBar.library"))}
      onClick={() => {
        setAppState({ isLibraryOpen: !isLibraryOpen });
      }}
    />
  </>
);

export const ZoomActions = ({
  renderAction,
  zoom,
}: {
  renderAction: ActionManager["renderAction"];
  zoom: number;
}) => (
  <Stack.Col gap={1}>
    <Stack.Row gap={1} align="center">
      {renderAction("zoomIn")}
      {renderAction("zoomOut")}
      {renderAction("resetZoom")}
      <div style={{ marginInlineStart: 4 }}>{(zoom * 100).toFixed(0)}%</div>
    </Stack.Row>
  </Stack.Col>
);
