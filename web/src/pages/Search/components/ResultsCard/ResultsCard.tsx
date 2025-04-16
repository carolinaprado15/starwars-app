import { useNavigate } from "react-router-dom";
import { Button, Card } from "../../../../components";
import { useApp } from "../../../../context/App/useApp";
import { Empty } from "../Empty/Empty";
import { Item } from "../Item/Item";
import { usePlatform } from "../../../../utils/hooks/usePlatform";
import { ResourceType } from "../../../../models/ResourceModel";
import "./ResultsCard.css";

const ResultsCard = () => {
  const { resourceList, setResourceList } = useApp();
  const platform = usePlatform();
  const navigate = useNavigate();

  const goToResource = (resourceType: ResourceType, id: number) => {
    navigate(`/${resourceType}/${id}`);
  };

  const goBack = () => {
    setResourceList(null)
  }

  return (
    <Card height={582}>
      <div className="card-header">
        <h2>
          Results
        </h2>
      </div>

      {
        resourceList && resourceList.length > 0 && resourceList.map(({ label, id, type }) => (
          <Item key={id} label={label} id={id} onSeeDetails={(id) => goToResource(type, id)} />
        ))
      }

      {
        (!resourceList || resourceList.length == 0) && <Empty />
      }

      {platform == "mobile" && (
        <div className="results-back-button">
          <Button onClick={goBack}>
            BACK TO SEARCH
          </Button>
        </div>
      )}
    </Card>
  )
}

export { ResultsCard };