import Heading from "@/components/Heading";

const Error = () => (
  <div className="flex justify-center items-center h-screen bg-red-500 text-white">
    <div className="text-center animate-slide-in-left">
      {/* <h1 className="text-6xl font-bold ">404</h1> */}
      <Heading className="text-6xl font-bold " text="404" />
      {/* <h2 className="text-lg">Something is going wrong...</h> */}
      <Heading
        className="text-lg"
        tag="h2"
        text="Something is going wrong..."
      />
    </div>
  </div>
);

export default Error;
