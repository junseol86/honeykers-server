import express from "express";

class Order {
  public app: express.Application

  constructor (_app: express.Application) {
    this.app = _app;
    this.setRoutes();
  }


  setRoutes () {
    this.app.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.send("여기까지만 되면 원이 없겠음" + new Date());
    });
  }
}

export default Order;