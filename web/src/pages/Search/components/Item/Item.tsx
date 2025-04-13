import { Button } from "../../../../components";
import { usePlatform } from "../../../../utils/hooks/usePlatform";
import { ItemProps } from "./types";
import "./Item.css";

const Item: React.FC<ItemProps> = ({ label, id, onSeeDetails }) => {
  const platform = usePlatform();

  return (
    <div className="item">
      <p className="-regular -bold">{label}</p>

      <Button 
        onClick={() => onSeeDetails(id)} 
        width={platform == "desktop" ? 134 : undefined}
      >
        SEE DETAILS
      </Button>
    </div>
  )
}

export { Item };