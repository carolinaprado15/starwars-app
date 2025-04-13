import { Card } from "../../../../components";
// import { Empty } from "../empty/Empty";
import { Item } from "../item/Item";
import "./ResultsCard.css";

const ResultsCard = () => {
  return (
    <Card height={582}>
      <div className="card-header">
        <h2>
          Results
        </h2>
      </div>

      <Item label="Carol" id={1} />
      <Item label="Carol2" id={2} />
      <Item label="Carol3" id={3} />
      <Item label="Carol4" id={4} />
      {/* <Empty /> */}

    </Card>
  )
}

export { ResultsCard };