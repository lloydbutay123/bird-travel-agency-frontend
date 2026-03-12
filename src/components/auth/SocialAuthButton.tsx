import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import Button from "../ui/Button";

export default function SocialAuthButtons() {
  return (
    <div className="flex gap-4 justify-between">
      <Button className="w-full" variant="outline">
        <FaFacebook size={24} />
      </Button>
      <Button className="w-full" variant="outline">
        <FaGoogle size={24} />
      </Button>
      <Button className="w-full" variant="outline">
        <FaApple size={24} />
      </Button>
    </div>
  );
}
