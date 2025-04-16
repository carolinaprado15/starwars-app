import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Details } from "../../components"
import { useFetch } from "../../utils/hooks/useFetch";
import { getPerson } from "../../services/ApiService";
import { PersonDetails } from "../../models/PeopleModel";
import "./Person.css";

const Person = () => {
  const { id } = useParams();

  const [person, setPerson] = useState<PersonDetails>({} as PersonDetails);
  const { loading, handleFetch } = useFetch(getPerson, setPerson);

  useEffect(() => {
    if (id) {
      handleFetch(id);
    }
  }, [id]);

  return (
    <Details
      title={person.name!}
      descriptionTitle="Details"
      listTitle="Movies"
      resourceList={person.movies || []}
      loading={loading}
    >
      <p className="person-info">
        Birth Year: {person.birthYear}
      </p>
      <p className="person-info">
        Gender: {person.gender}
      </p>
      <p className="person-info">
        Eye Color: {person.eyeColor}
      </p>
      <p className="person-info">
        Hair Color: {person.hairColor}
      </p>
      <p className="person-info">
        Height: {person.height}
      </p>
      <p className="person-info">
        Mass: {person.mass}
      </p>
    </Details>

  )
}

export { Person }