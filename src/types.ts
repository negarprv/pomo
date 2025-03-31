export type TaskStatus = "pending" | "active" | "completed";
export type TimerMode = "work" | "shortBreak" | "longBreak";
export type TimerStatus = "running" | "paused" | "stopped";

export interface Task {
  id: number;
  name: string;
  pomodorosRequired: number;
  pomodorosCompleted: number;
  status: TaskStatus;
  priority: number;
}
