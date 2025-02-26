const PROJECT_NAME = process.env.NEXT_PUBLIC_PROJECT_NAME || "sepah";

export const SERVER_API_TOKEN = typeof window !== "undefined" ? window.localStorage.getItem(`${PROJECT_NAME}-access`) : false ;
export const SERVER_API_URL = 'http://localhost:9000/v1'