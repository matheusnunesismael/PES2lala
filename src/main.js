import "./index.html";
import "./login.html";
import "./perfil.html";
import "./registro.html";
import "./relatorios.html";

import testModule from "./scripts/module-a";
import ImageController from "./controllers/ImageController";

testModule.test();

function postImage() {
    const imageController = new ImageController();
    imageController.postImage();
}
