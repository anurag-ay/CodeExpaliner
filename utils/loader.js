import { createSpinner } from "nanospinner";
import chalkAnimation from "chalk-animation";

export function startLoaderAnimation() {
  const spinner = createSpinner("please wait....");
  const animation = chalkAnimation.rainbow("\nGetting explaination");
  spinner.start();

  return { spinner, animation };
}
export function stopLoaderAnimation({ spinner, animation }) {
  spinner.success({ text: "Here You Go.\n" });
  animation.stop();
}
