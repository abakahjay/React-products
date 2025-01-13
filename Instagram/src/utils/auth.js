import API from "./api";

export const loginUser = async (email, password) => {
    const { user } = await API.post("/api/v1/auth/login", { email, password });
    console.log(user);
    return user;
};

export const registerUser = async (email, password) => {
    const { data } = await API.post("/api/v1/auth/register", { email, password });
    console.log(data);
    return data.user;
};

export const logoutUser = async () => {
    console.log(data);
    await API.post("/api/v1/auth/logout");
};
