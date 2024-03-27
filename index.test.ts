import { BlueSnap } from "./index";

describe("blue-snap-typescript-sdk", () => {
    it("initialize client", async () => {
        const bluesnap = new BlueSnap({
            apiKey: "API_KEY",
        });
    });
});
