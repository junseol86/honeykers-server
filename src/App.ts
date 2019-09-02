import express from "express";
import order from "./controllers/Order";

class App {
  public app: express.Application;

  /**
   * @ class App
   * @ method bootstrap
   * @ static
   * 
   */
  public static bootstrap (): App {
    return new App();
  }

  constructor () {
    this.app = express();

    new order(this.app);

  }
}

export default App;