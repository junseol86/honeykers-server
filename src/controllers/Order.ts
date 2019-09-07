import express from "express";

class Order {
  public app: express.Application

  constructor (_app: express.Application) {
    this.app = _app;
    this.setRoutes();
  }

  
  setRoutes () {
    this.app.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.send("Hello 메시지가 바뀌었엉" + new Date());
    });
  }
}

export default Order;