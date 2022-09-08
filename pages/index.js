import ColorPickerContainer from "../components/ColorPickerContainer";
import Header from "../components/Header";
import { PainterContext } from "../contexts/PainterContext";
import { useState } from "react";
import Canvas from "../components/Canvas";
import CanvasLib from "../libs/CanvasLib";

export default function Home() {
  //selected color from color picker
  //set black color as default
  const [selColor, setSelColor] = useState("#000000");

  //16x16 2D Array that holds color data
  const [pixels, setPixels] = useState(CanvasLib.createEmptyCanvas());

  //will be called by Cell component
  const paint = (xPos, yPos) => {
    //copy from old 2d Array
    const newPixels = CanvasLib.copyCanvas(pixels);
    //your code here
    //update newPixels[...][...] xPos, yPos, selColor
    //setPixels(...)
    newPixels[yPos][xPos] = selColor;
    setPixels(newPixels);
  };

  const clear = () => {
    //your code here
    //Hint : use CanvasLib.createEmptyCanvas()
    const newPixels = CanvasLib.createEmptyCanvas();
    setPixels(newPixels);
  };

  const random = () => {
    const newPixels = CanvasLib.createRandomCanvas();
    // newPixels[yPos][xPos] = selColor;
    setPixels(newPixels);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "GhostWhite" }}>
      <PainterContext.Provider value={{ selColor, setSelColor, pixels, paint }}>
        <Header />
        <ColorPickerContainer />
        <Canvas />

        <div className="d-flex justify-content-center gap-2">
          <button className="btn btn-dark" onClick={clear}>
            Clear
          </button>
          <button className="btn btn-dark" onClick={random}>
            Random Color
          </button>
          {/* <button
            className="btn btn-dark"
            onClick={
              clearInterval(setInterval(random, 2000))
              // random
            }
          >
            Play Disco
          </button> */}
        </div>
      </PainterContext.Provider>
    </div>
  );
}
