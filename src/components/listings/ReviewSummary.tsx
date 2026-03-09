type ReviewSummaryProps = {
  totalRatings: number;
  totalReviews: number;
};

export default function ReviewSummary({
  totalRatings,
  totalReviews,
}: ReviewSummaryProps) {
  return (
    <div className="flex items-center gap-4">
      <h1 className="text-[50px] leading-none font-bold font-tradegothic">
        {totalRatings}
      </h1>
      <div>
        <h4 className="text-[20px] font-semibold mb-2">Very good</h4>
        <p className="text-[14px] ">{totalReviews} verified reviews</p>
      </div>
    </div>
  );
}
