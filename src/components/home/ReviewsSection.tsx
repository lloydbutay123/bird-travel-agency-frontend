import ReviewCard from "./ReviewCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import SectionHeader from "../ui/SectionHeader";
import { reviews } from "@/data/reviews";

export default function ReviewsSection() {
  return (
    <div className="gap-10 px-6 xl:px-0">
      <SectionHeader
        title="Reviews"
        subtitle="What people says about Golobe facilities"
        btnLabel="See All"
      />
      <div>
        <Swiper
          modules={[Pagination]}
          loop
          pagination={{ clickable: true }}
          watchSlidesProgress={false}
          observer={true}
          observeParents={true}
          spaceBetween={40}
          slidesPerView={1}
          speed={450}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 24 },
          }}
          className=""
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="pb-10 h-auto">
              <ReviewCard
                title={review.title}
                review={review.review}
                author={review.author}
                company={review.company}
                source={review.source}
                image={review.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
