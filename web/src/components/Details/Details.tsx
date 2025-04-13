import React from "react";
import { DetailsProps } from "./types";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import { usePlatform } from "../../utils/hooks/usePlatform";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { ResourceType } from "../../models/ResourceModel";
import "./Details.css";

const Details: React.FC<DetailsProps> = ({
  children,
  title,
  descriptionTitle,
  listTitle,
  resourceList,
  loading
}) => {
  const platform = usePlatform();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(`/`);
  };

  const goToResource = (resourceType: ResourceType, id: number) => {
    navigate(`/${resourceType}/${id}`)
  };

  return (
    <div className="details-container">
      <Card height={417} width={804}>

        {loading && <Loader />}

        {!loading && <div className="details-content">
          <h1>
            {title}
          </h1>

          <section className="info">
            <div>
              <div className="info-header">
                <h2 className="-regular">
                  {descriptionTitle}
                </h2>
              </div>

              <div className="info-content">
                {children}
              </div>
            </div>

            <div>
              <div className="info-header">
                <h2 className="-regular">
                  {listTitle}
                </h2>
              </div>

              <div className="info-content">
                {resourceList.map((resource, index) => (
                  <span className="info-item" key={resource.id}>
                    <a onClick={() => goToResource(resource.type, resource.id)}>
                      {resource.label}
                    </a>
                    <span>
                      {index < resourceList.length - 1 && ', '}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </section>

          <div className="back-button">
            <Button
              width={platform == "desktop" ? 187 : undefined}
              onClick={goBack}
            >
              BACK TO SEARCH
            </Button>
          </div>
        </div>}
      </Card>
    </div>
  )
}

export { Details };