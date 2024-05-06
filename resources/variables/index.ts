import { Environment } from "../../enums/environment.type";
import { Parser } from "../../utilities/parses.helper";
import { Config } from "./config";
import { devData } from "./dev.data";
import { stagingData } from "./staging.data";

export function AGTestData(): Config {
    const env = Parser("env")

    switch (env) {
        case Environment.staging:
          return stagingData
        case Environment.dev:
          return devData
        default:
          return stagingData;
      }
}