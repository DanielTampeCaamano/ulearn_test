export interface User {
    id: number;
    name: string;
    last_name: string;
    phone: string;
    created_at: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
