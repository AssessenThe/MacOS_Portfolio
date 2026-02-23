import { WindowsControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window"


const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl } = data;
    
  return (
    <>
        <div id="window-header">
            <WindowsControls target="imgfile" />
            <h2>{name}</h2>
        </div>

        <div className="p-5 bg-white">
            {imageUrl ? (
                <div>
                    <img 
                        src={imageUrl} 
                        alt={name} 
                        className="w-full h-auto max-h-[70vh] object-contain rounded"
                    />
                </div>
            ) : null}
        </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow