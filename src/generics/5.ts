export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type RecordRole = Record<UserRole, string>;

// Замініть наступний код на версію за допомогою Record
const RoleDescription: RecordRole = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};