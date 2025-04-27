import { Task } from "../models/task.model.js";

const getTaskById = async (taskId) => {
  const task = await Task.findById(taskId);
  return task;
};

const updateTask = async (taskId, updateData) => {
  const task = await Task.findByIdAndUpdate(
    taskId,
    { ...updateData },
    { new: true }
  );
  return task;
};

const deleteTask = async (taskId) => {
  const task = await Task.findByIdAndDelete(taskId);
  return task;
};

const createTask = async ({ title, description, projectId }) => {
  const newTask = await Task.create({ title, description, projectId });
  return newTask;
};

export { createTask };
