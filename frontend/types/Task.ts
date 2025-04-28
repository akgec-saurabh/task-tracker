export interface TaskProps {
  id: string;
  name: string;
  description: string;
  status: string;
  completedAt: Date | null;
  projectId: string;
}
