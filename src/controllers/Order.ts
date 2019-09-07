import express from "express";

class Order {
  public app: express.Application

  constructor (_app: express.Application) {
    this.app = _app;
    this.setRoutes();
  }


  setRoutes () {
    this.app.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.send("이것까지 되면 레알 감동" + new Date());
    });
  }
}

export default Order;