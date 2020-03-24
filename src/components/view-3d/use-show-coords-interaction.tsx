import { ftToViewUnit } from "./helpers";
import { InteractionHandler } from "./interaction-handler";
import { useStores } from "../../use-stores";
import { PointerEvent } from "react-three-fiber/canvas";

export const useShowCoordsInteraction: () => InteractionHandler = () => {
  const { simulation } = useStores();
  return {
    onClick: (e: PointerEvent) => {
      if (simulation.config.showCoordsOnClick) {
        const ratio = ftToViewUnit(simulation);
        const xFt = e.point.x / ratio;
        const yFt = e.point.y / ratio;
        const xRel = xFt / simulation.config.modelWidth;
        const yRel = yFt / simulation.config.modelHeight;
        window.alert(
          `x: ${xFt.toFixed(3)} ft, y: ${yFt.toFixed(3)} ft\n` +
          `x relative: ${xRel.toFixed(3)}, y relative: ${yRel.toFixed(3)}`
        );
      }
    }
  };
};
