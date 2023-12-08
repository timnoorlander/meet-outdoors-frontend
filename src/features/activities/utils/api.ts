import { Activity } from "@/types";
import axios from "axios";

export const getActivities = (): Promise<Activity[]> => {
  return axios.get("/activities").then((response) => {
    return response.data;
  });
};

export const getActivity = (id: string) => {
  return axios.get(`/activities/${id}`).then((response) => {
    return response.data;
  });
};

export const createActivity = (activity: Activity) => {
  return axios.post("/activities", activity).then((response) => {
    return response.data;
  });
};

export const updateActivity = (id: string, activity: Activity) => {
  return axios.put(`/activities/${id}`, activity).then((response) => {
    return response.data;
  });
};

export const deleteActivity = (id: string) => {
  return axios.delete(`/activities/${id}`).then((response) => {
    return response.data;
  });
};
