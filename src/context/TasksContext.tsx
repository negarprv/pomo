import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Task } from "../types";

interface TaskContextType {
  tasks: Task[];
  addTask: (name: string, pomodorosRequired: number, priority: number) => void;
  getActiveTask: () => Task | undefined;
  startTask: () => void;
  completeTask: () => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    return JSON.parse(localStorage.getItem("tasks") || "[]") as Task[];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (
    name: string,
    pomodorosRequired: number,
    priority: number
  ) => {
    const newTask: Task = {
      id: Date.now(),
      name,
      pomodorosRequired,
      priority,
      status: "pending",
      pomodorosCompleted: 0,
    };

    setTasks([...tasks, newTask].sort((a, b) => a.priority - b.priority));
  };

  const getActiveTask = (): Task | undefined => {
    const activeTask = tasks.find((task) => task.status === "active");
    return activeTask;
  };

  const startTask = () => {
    setTasks((prevTasks) => {
      if (prevTasks[0]?.status === "pending") {
        const updatedTasks = [...prevTasks];
        updatedTasks[0] = { ...updatedTasks[0], status: "active" };
        return updatedTasks;
      }
      return prevTasks;
    });
  };

  const completeTask = () => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];

      const activeTaskIndex = updatedTasks.findIndex(
        (task) => task.status === "active"
      );
      if (activeTaskIndex !== -1) {
        const activeTask = { ...updatedTasks[activeTaskIndex] };
        activeTask.pomodorosCompleted++;

        if (activeTask.pomodorosCompleted === activeTask.pomodorosRequired) {
          activeTask.status = "completed";
        }

        updatedTasks[activeTaskIndex] = activeTask;
      }

      return updatedTasks.sort((a, b) => {
        if (a.status === "completed" && b.status !== "completed") return 1;
        if (b.status === "completed" && a.status !== "completed") return -1;
        return a.priority - b.priority;
      });
    });
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, getActiveTask, startTask, completeTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
