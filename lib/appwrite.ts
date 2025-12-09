import { Account, Client, Databases, ID } from "react-native-appwrite";

const endpointId = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!;
const projectId = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;
// const plateformName = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_NAME!;
const databaseId = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const userTableId = process.env.EXPO_PUBLIC_APPWRITE_USERS_TABLE_ID!;

const client = new Client();
client.setEndpoint(endpointId).setProject(projectId);

const account = new Account(client);
const database = new Databases(client);

export async function signUp(
  username: string,
  phoneNumber: string,
  password: string,
) {
  try {
    const user = await account.create(
      ID.unique(),
      phoneNumber + "@appwrite.local",
      password,
      phoneNumber,
    );
    await database.createDocument(databaseId, userTableId, ID.unique(), {
      $id: ID.unique(),
      username: username,
      phone: phoneNumber,
      password: password,
      $createdAt: new Date().toString(),
      $updatedAt: new Date().toString(),
    });
    return user;
  } catch (err) {
    console.error("Error signing up: ", err);
    throw err;
  }
}
const pseudoEmail = (phone: string) => `${phone}@appwrite.local`;
export async function logIn(phoneNumber: string, password: string) {
  try {
    const session = await account.createEmailPasswordSession(
      pseudoEmail(phoneNumber),
      password,
    );
    return session;
  } catch (err) {
    console.error("Error login : ", err);
    throw err;
  }
}
export interface userType {
  $id: string;
  username: string;
  phone: string;
  password: string;
  $created_at?: string;
  $update_at?: string;
}
export async function getCurrentUser(): Promise<userType | null> {
  try {
    const user = account.get();
    return user as unknown as userType;
  } catch (err) {
    console.error("Error while getting the current user", err);
    return null;
  }
}
