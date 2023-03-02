import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="px-2 h-screen flex flex-col justify-center items-center text-white">
      <h1 className="mb-20 text-5xl font-bold">ChatGPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="mb-5 flex flex-col justify-center items-center">
            <SunIcon className="w-8 h-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain something to me"</p>
            <p className="infoText">
              "What is the difference between a dog and a cat?"
            </p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>

        <div>
          <div className="mb-5 flex flex-col justify-center items-center">
            <BoltIcon className="w-8 h-8" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Change the ChatGPT Model to Use</p>
            <p className="infoText">
              Messages are stored in Firebase's Firestore
            </p>
            <p className="infoText">
              Hot Toast Notifications when ChatGPT is Thinking!
            </p>
          </div>
        </div>

        <div>
          <div className="mb-5 flex flex-col justify-center items-center">
            <ExclamationTriangleIcon className="w-8 h-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              May Occasionally Generate Incorrect Information
            </p>
            <p className="infoText">
              May Occasionally Produce Harmful Instructions or Biased Content
            </p>
            <p className="infoText">
              Limited Knowledge of World and Events After 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
