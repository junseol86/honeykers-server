import express from "express";

class Order {
  public app: express.Application

  constructor (_app: express.Application) {
    this.app = _app;
    this.setRoutes();
  }


  setRoutes () {
    this.app.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.send("두개 컨테이너 돌리기 한번 더 확인!" + new Date());
    });
  }
}

export default Order;