import Navbar from "./Navbar";
import TextScroll from "./TextScroll";

const Wrapper = () => {
  return (
    <>
      <Navbar />
      <TextScroll />
      <div className="w-full h-screen bg-amber-300"></div>
      <div className="w-full h-screen bg-amber-900"></div>
    </>
  );
};

export default Wrapper;
