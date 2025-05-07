
import { ReactNode } from "react";

export interface ServiceType {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  iconBg: string;
  iconColor: string;
}
