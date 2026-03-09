import Image from "next/image";
import Button from "../ui/Button";

export default function ListingGallery() {
  return (
    <div className="relative grid grid-cols-4 gap-2 h-137.5 rounded-xl overflow-hidden mb-16">
      <div className="relative col-span-2">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-2">
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="relative">
            <Image
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <Button className="absolute font-semibold right-4 bottom-4">
        View all photos
      </Button>
    </div>
  );
}
