import { GestureDirection } from "../enums/gesture_direction.type.ts";

export class GestureHelper {
  async swipe(
    from: { x: number; y: number },
    to: { x: number; y: number }
  ): Promise<void> {
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: from.x, y: from.y },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 100 },
          { type: "pointerMove", duration: 100, x: to.x, y: to.y },
          { type: "pointerUp", button: 0, diration: 100 },
        ],
      },
    ]);
    await driver.pause(2000);
  }

  async scrollAndFindElement(
    el: ChainablePromiseElement,
    direction: GestureDirection
  ) {
    let isElementDisplayed = await el.isDisplayed();

    for (let i = 0; i < 5; i++) {
      if (!isElementDisplayed) {
        const windowSize = await driver.getWindowSize();

        const centerX = windowSize.width * 0.2;
        const yStart = windowSize.height * 0.5;
        const yEnd = windowSize.height * 0.2;
        const centerY = windowSize.height * 0.2;
        const xStart = windowSize.width * 0.5;
        const xEnd = windowSize.width * 0.2;

        switch (direction) {
          case GestureDirection.up:
            await this.swipe(
              { x: centerX, y: yEnd },
              { x: centerX, y: yStart }
            );
            break;

          case GestureDirection.down:
            await this.swipe(
              { x: centerX, y: yStart },
              { x: centerX, y: yEnd }
            );
            break;

          case GestureDirection.right:
            await this.swipe(
              { y: centerY, x: xStart },
              { y: centerY, x: xEnd }
            );
            break;

          case GestureDirection.left:
            await this.swipe(
              { y: centerY, x: xEnd },
              { y: centerY, x: xStart }
            );
            break;
        }
      } else {
        await driver.pause(5000);
        await el.isDisplayed();
        break;
      }

      await driver.pause(2000);
      isElementDisplayed = await el.isDisplayed();
    }
  }
}
