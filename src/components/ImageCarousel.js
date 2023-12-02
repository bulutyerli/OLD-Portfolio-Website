import { Carousel } from "react-responsive-carousel";

export default function ImageCarousel({ images }) {
  return (
    <div>
      <Carousel showArrows={true}>
        {images.map((image) => {
          <img src="image" alt="project images" />;
        })}
      </Carousel>
    </div>
  );
}
