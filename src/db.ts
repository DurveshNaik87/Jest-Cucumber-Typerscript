export const connect = (user: string, password: string, database: string, host: string) => {
    return `${user}:${password}:${database}:${host}`;
}

