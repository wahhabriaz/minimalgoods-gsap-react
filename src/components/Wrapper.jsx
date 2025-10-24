import ExpandingImageSection from "./ExpandingImageSection";
import ImageSections from "./ImageSection";
import Navbar from "./Navbar";
import TextScroll from "./TextScroll";

const Wrapper = () => {
  return (
    <>
      <Navbar />
      <TextScroll />
      <ExpandingImageSection />

      <ImageSections />
    </>
  );
};

export default Wrapper;
