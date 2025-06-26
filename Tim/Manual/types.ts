interface Client {
    id: number;
    name: string;
    email: string;
}
interface Server {
    id: number;
    hostname: string;
    ipAddress: string;
}
interface Database {
    id: number;
    name: string;
    type: string;
}
interface API {
    id: number;
    endpoint: string;
    method: string;
}