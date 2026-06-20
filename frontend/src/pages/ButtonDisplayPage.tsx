import PaginationButton from "../components/button/PaginationButton";
import IconLabelButton from "../components/button/IconLabelButton";
import { Bookmark, Trash2, X } from "lucide-react";

export default function ButtonDisplayPage() {
  const numArray = [1, 2, 3, 4, 5, 10, 20, 100, 2390];
  return (
    <div className="w-full h-fit flex flex-wrap gap-5">
      {numArray.map((num) => (
        <PaginationButton label={num} />
      ))}
      {numArray.map((num) => (
        <PaginationButton label={num} isActive={true} />
      ))}
      <IconLabelButton label="Save" Icon={Bookmark} type="primary" />

      <IconLabelButton label="Cancel" Icon={X} type="secondary" />

      <IconLabelButton label="Delete" Icon={Trash2} type="danger" />
    </div>
  );
}
