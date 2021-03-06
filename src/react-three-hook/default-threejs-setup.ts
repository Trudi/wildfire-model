import * as THREE from "three";

export const getDefCamera = ({ offsetWidth, offsetHeight }: { offsetWidth: number, offsetHeight: number }) => {
  return new THREE.PerspectiveCamera(
    33,
    offsetWidth / offsetHeight,
    0.1,
    1000,
  );
};

class FakeRenderer {
  public domElement: HTMLCanvasElement = document.createElement("canvas");

  public getSize() {
    return {
      width: this.domElement.width,
      height: this.domElement.height
    };
  }

  public setSize(width: number, height: number) {
    this.domElement.width = width;
    this.domElement.height = height;
  }

  public render() {
    // noop
  }

  public setPixelRatio() {
    // noop
  }
}

export const getDefRenderer = (canvas: HTMLCanvasElement) => {
  let renderer;
  const context = canvas.getContext("webgl");
  if (context) {
    renderer = new THREE.WebGLRenderer({
      canvas,
      context
    });
  } else {
    renderer = new FakeRenderer();
  }
  renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  return renderer;
};

export const getDefScene = () => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xcac8c8);
  return scene;
};
