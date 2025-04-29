export interface TaskProps {
  _id: string;
  title: string;
  description: string;
  status: string;
  completedAt: Date | null;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
}
