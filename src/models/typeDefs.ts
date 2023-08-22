// Construct a schema, using GraphQL schema language
export const typeDefs = `
    type Contact = {
        id: number;
        phoneNumber: string | null;
        email: string | null;
        linkedId: number | null;
        linkPrecedence: 'secondary' | 'primary';
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }

    interface Mutation {
        createContact(phoneNumber: string, email: string): { isSuccess: true }
    }`
;