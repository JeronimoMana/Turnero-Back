
import server from "./server";

export const serverInicialize = async (PORT: number, HOST: string, PROTO: string) => {
    server.listen(PORT, HOST, () => {
        console.log(`Server listening on ${PROTO}://${HOST}:${PORT}`);
    });
}