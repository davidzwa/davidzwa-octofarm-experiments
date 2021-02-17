import { Test, TestingModule } from "@nestjs/testing";
import { PrinterController } from "./printer.controller";
import { AppService } from "../services/app.service";

describe(PrinterController.name, () => {
    let appController: PrinterController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [PrinterController],
            providers: [AppService]
        }).compile();

        appController = app.get<PrinterController>(PrinterController);
    });

    describe("root", () => {
        it("should return \"Hello World!\"", () => {
            expect(appController.getHello()).toBe("Hello World!");
        });
    });
});
