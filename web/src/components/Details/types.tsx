import { Resource } from "../../models/ResourceModel";

export interface DetailsProps {
  children: React.ReactNode;
  title: string;
  descriptionTitle: string;
  listTitle: string;
  resourceList: Resource[];
  loading?: boolean;
}