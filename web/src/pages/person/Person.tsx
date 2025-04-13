import { Details } from "../../components"

const Person = () => {
  return (
    <Details
      title="Carol"
      descriptionTitle="Details"
      listTitle="Movies"
      resourceList={[{label: "carol", id: 1}]}
    >
      <p>
        olar
      </p>
    </Details>
  )
}

export { Person }