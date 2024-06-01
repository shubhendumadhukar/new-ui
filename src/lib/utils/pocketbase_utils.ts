import PocketBase from "pocketbase";
import { toast } from "svelte-sonner";
export const PB_URL = "https://instrukti.com"
export const pb = new PocketBase(PB_URL);
pb.autoCancellation(false);
export const logout = async () => {
    localStorage.clear();
    window.location.href = "/";
};
export const login = async (identifier: string, password: string) => {
    try {
        await pb.collection("users").authWithPassword(identifier, password);
        window.location.href = "/";
    } catch (error: any) {
        toast.error(error.message);
    }
};