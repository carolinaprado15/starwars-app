import React from "react";
import { DetailsProps } from "./types";
import { Card } from "../card/Card";
import "./Details.css";

const Details: React.FC<DetailsProps> = ({
  children,
  title,
  descriptionTitle,
  listTitle,
  resourceList
}) => {
  return (
    <div className="details-container">
      <Card height={417} width={804}>
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
                <span>
                  <a>{resource.label}</a>
                  <span>
                    {index < resourceList.length - 1 && ', '}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </section>
      </Card>
    </div>
  )
}

export { Details };