import { Button } from "../../../../components";
import { usePlatform } from "../../../../hooks/usePlatform";
import "./Item.css";
import { ItemProps } from "./types";

const Item: React.FC<ItemProps> = ({ label, id }) => {
  const platform = usePlatform();

  return (
    <div className="item">
      <p className="-regular -bold">{label}</p>

      <Button 
        onClick={() => console.log(id)} 
        width={platform == "desktop" ? 134 : undefined}
      >
        SEE DETAILS
      </Button>
    </div>
  )
}

export { Item };