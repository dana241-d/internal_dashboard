import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

function AppButton() {
  return (
    <Button
      variant="outline"
      type="submit"
      className="text-white bg-neutral-700 font-bold mx-40 my-20 "
      size="lg"
    >
      Login <ArrowUpRightIcon />
    </Button>
  );
}

export default AppButton;
