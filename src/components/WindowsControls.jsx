import useWindowStore from "#store/window"
import { X } from "lucide-react";
import { RectangleHorizontal } from "lucide-react";
import { Minus } from "lucide-react";

const WindowsControls = ({ target}) => {
  const { closeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} >
        <div className="close-button">
          <X size={13} strokeWidth={3}/>
        </div>
      </div>
      <div  className="minimize">
        <div className="close-button">
          <Minus size={13} strokeWidth={4}/>
        </div>
      </div>
      <div className="maximize" >
        <div className="close-button">
          <RectangleHorizontal size={13} strokeWidth={4}/>
        </div>
      </div>
    </div>
  )
}

export default WindowsControls