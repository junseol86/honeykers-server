import express from "express";
import {machineId, machineIdSync} from 'node-machine-id';

class Order {
  public app: express.Application

  constructor (_app: express.Application) {
    this.app = _app;
    this.setRoutes();
  }


  setRoutes () {
    this.app.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
      getMachineId(res);
    });
  }
  
}

async function getMachineId(res: express.Response) {
  let id = await machineId();
  res.send(`기기번호: ${id}\n현재시간: ${new Date()}`);
}

export default Order;