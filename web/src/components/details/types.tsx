export interface DetailsProps {
  children: React.ReactNode;
  title: string;
  descriptionTitle: string;
  listTitle: string;
  resourceList: Resource[];
}

export interface Resource {
  label: string;
  id: number;
}