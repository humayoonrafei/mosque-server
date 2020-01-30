
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum EventOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    description_ASC = "description_ASC",
    description_DESC = "description_DESC"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum PrismaDatabase {
    default = "default"
}

export enum UserOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    firstName_ASC = "firstName_ASC",
    firstName_DESC = "firstName_DESC",
    lastName_ASC = "lastName_ASC",
    lastName_DESC = "lastName_DESC",
    email_ASC = "email_ASC",
    email_DESC = "email_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC"
}

export class EventCreateInput {
    id?: string;
    name: string;
    description: string;
    user: UserCreateOneWithoutEventsInput;
}

export class EventCreateManyWithoutUserInput {
    create?: EventCreateWithoutUserInput[];
    connect?: EventWhereUniqueInput[];
}

export class EventCreateWithoutUserInput {
    id?: string;
    name: string;
    description: string;
}

export class EventScalarWhereInput {
    AND?: EventScalarWhereInput[];
    OR?: EventScalarWhereInput[];
    NOT?: EventScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    description?: string;
    description_not?: string;
    description_in?: string[];
    description_not_in?: string[];
    description_lt?: string;
    description_lte?: string;
    description_gt?: string;
    description_gte?: string;
    description_contains?: string;
    description_not_contains?: string;
    description_starts_with?: string;
    description_not_starts_with?: string;
    description_ends_with?: string;
    description_not_ends_with?: string;
}

export class EventSubscriptionWhereInput {
    AND?: EventSubscriptionWhereInput[];
    OR?: EventSubscriptionWhereInput[];
    NOT?: EventSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: EventWhereInput;
}

export class EventUpdateInput {
    name?: string;
    description?: string;
    user?: UserUpdateOneRequiredWithoutEventsInput;
}

export class EventUpdateManyDataInput {
    name?: string;
    description?: string;
}

export class EventUpdateManyMutationInput {
    name?: string;
    description?: string;
}

export class EventUpdateManyWithoutUserInput {
    create?: EventCreateWithoutUserInput[];
    connect?: EventWhereUniqueInput[];
    set?: EventWhereUniqueInput[];
    disconnect?: EventWhereUniqueInput[];
    delete?: EventWhereUniqueInput[];
    update?: EventUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: EventUpdateManyWithWhereNestedInput[];
    deleteMany?: EventScalarWhereInput[];
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput[];
}

export class EventUpdateManyWithWhereNestedInput {
    where: EventScalarWhereInput;
    data: EventUpdateManyDataInput;
}

export class EventUpdateWithoutUserDataInput {
    name?: string;
    description?: string;
}

export class EventUpdateWithWhereUniqueWithoutUserInput {
    where: EventWhereUniqueInput;
    data: EventUpdateWithoutUserDataInput;
}

export class EventUpsertWithWhereUniqueWithoutUserInput {
    where: EventWhereUniqueInput;
    update: EventUpdateWithoutUserDataInput;
    create: EventCreateWithoutUserInput;
}

export class EventWhereInput {
    AND?: EventWhereInput[];
    OR?: EventWhereInput[];
    NOT?: EventWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    description?: string;
    description_not?: string;
    description_in?: string[];
    description_not_in?: string[];
    description_lt?: string;
    description_lte?: string;
    description_gt?: string;
    description_gte?: string;
    description_contains?: string;
    description_not_contains?: string;
    description_starts_with?: string;
    description_not_starts_with?: string;
    description_ends_with?: string;
    description_not_ends_with?: string;
    user?: UserWhereInput;
}

export class EventWhereUniqueInput {
    id?: string;
}

export class UserCreateInput {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    events?: EventCreateManyWithoutUserInput;
}

export class UserCreateOneWithoutEventsInput {
    create?: UserCreateWithoutEventsInput;
    connect?: UserWhereUniqueInput;
}

export class UserCreateWithoutEventsInput {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
}

export class UserSubscriptionWhereInput {
    AND?: UserSubscriptionWhereInput[];
    OR?: UserSubscriptionWhereInput[];
    NOT?: UserSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: UserWhereInput;
}

export class UserUpdateInput {
    firstName?: string;
    lastName?: string;
    email?: string;
    events?: EventUpdateManyWithoutUserInput;
}

export class UserUpdateManyMutationInput {
    firstName?: string;
    lastName?: string;
    email?: string;
}

export class UserUpdateOneRequiredWithoutEventsInput {
    create?: UserCreateWithoutEventsInput;
    connect?: UserWhereUniqueInput;
    update?: UserUpdateWithoutEventsDataInput;
    upsert?: UserUpsertWithoutEventsInput;
}

export class UserUpdateWithoutEventsDataInput {
    firstName?: string;
    lastName?: string;
    email?: string;
}

export class UserUpsertWithoutEventsInput {
    update: UserUpdateWithoutEventsDataInput;
    create: UserCreateWithoutEventsInput;
}

export class UserWhereInput {
    AND?: UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    firstName?: string;
    firstName_not?: string;
    firstName_in?: string[];
    firstName_not_in?: string[];
    firstName_lt?: string;
    firstName_lte?: string;
    firstName_gt?: string;
    firstName_gte?: string;
    firstName_contains?: string;
    firstName_not_contains?: string;
    firstName_starts_with?: string;
    firstName_not_starts_with?: string;
    firstName_ends_with?: string;
    firstName_not_ends_with?: string;
    lastName?: string;
    lastName_not?: string;
    lastName_in?: string[];
    lastName_not_in?: string[];
    lastName_lt?: string;
    lastName_lte?: string;
    lastName_gt?: string;
    lastName_gte?: string;
    lastName_contains?: string;
    lastName_not_contains?: string;
    lastName_starts_with?: string;
    lastName_not_starts_with?: string;
    lastName_ends_with?: string;
    lastName_not_ends_with?: string;
    email?: string;
    email_not?: string;
    email_in?: string[];
    email_not_in?: string[];
    email_lt?: string;
    email_lte?: string;
    email_gt?: string;
    email_gte?: string;
    email_contains?: string;
    email_not_contains?: string;
    email_starts_with?: string;
    email_not_starts_with?: string;
    email_ends_with?: string;
    email_not_ends_with?: string;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    events_every?: EventWhereInput;
    events_some?: EventWhereInput;
    events_none?: EventWhereInput;
}

export class UserWhereUniqueInput {
    id?: string;
    email?: string;
}

export interface Node {
    id: string;
}

export class AggregateEvent {
    count: number;
}

export class AggregateUser {
    count: number;
}

export class BatchPayload {
    count: Long;
}

export class Event implements Node {
    id: string;
    name: string;
    description: string;
    user: User;
}

export class EventConnection {
    pageInfo: PageInfo;
    edges: EventEdge[];
    aggregate: AggregateEvent;
}

export class EventEdge {
    node: Event;
    cursor: string;
}

export class EventPreviousValues {
    id: string;
    name: string;
    description: string;
}

export class EventSubscriptionPayload {
    mutation: MutationType;
    node?: Event;
    updatedFields?: string[];
    previousValues?: EventPreviousValues;
}

export abstract class IMutation {
    abstract createUser(data: UserCreateInput): User | Promise<User>;

    abstract createEvent(data: EventCreateInput): Event | Promise<Event>;

    abstract updateUser(data: UserUpdateInput, where: UserWhereUniqueInput): User | Promise<User>;

    abstract updateEvent(data: EventUpdateInput, where: EventWhereUniqueInput): Event | Promise<Event>;

    abstract deleteUser(where: UserWhereUniqueInput): User | Promise<User>;

    abstract deleteEvent(where: EventWhereUniqueInput): Event | Promise<Event>;

    abstract upsertUser(where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput): User | Promise<User>;

    abstract upsertEvent(where: EventWhereUniqueInput, create: EventCreateInput, update: EventUpdateInput): Event | Promise<Event>;

    abstract updateManyUsers(data: UserUpdateManyMutationInput, where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyEvents(data: EventUpdateManyMutationInput, where?: EventWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyUsers(where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyEvents(where?: EventWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract executeRaw(database: PrismaDatabase, query: string): Json | Promise<Json>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export abstract class IQuery {
    abstract users(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): User[] | Promise<User[]>;

    abstract events(where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Event[] | Promise<Event[]>;

    abstract user(where: UserWhereUniqueInput): User | Promise<User>;

    abstract event(where: EventWhereUniqueInput): Event | Promise<Event>;

    abstract usersConnection(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserConnection | Promise<UserConnection>;

    abstract eventsConnection(where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): EventConnection | Promise<EventConnection>;

    abstract node(id: string): Node | Promise<Node>;
}

export abstract class ISubscription {
    abstract user(where?: UserSubscriptionWhereInput): UserSubscriptionPayload | Promise<UserSubscriptionPayload>;

    abstract event(where?: EventSubscriptionWhereInput): EventSubscriptionPayload | Promise<EventSubscriptionPayload>;
}

export class User implements Node {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    updatedAt: DateTime;
    createdAt: DateTime;
    events?: Event[];
}

export class UserConnection {
    pageInfo: PageInfo;
    edges: UserEdge[];
    aggregate: AggregateUser;
}

export class UserEdge {
    node: User;
    cursor: string;
}

export class UserPreviousValues {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    updatedAt: DateTime;
    createdAt: DateTime;
}

export class UserSubscriptionPayload {
    mutation: MutationType;
    node?: User;
    updatedFields?: string[];
    previousValues?: UserPreviousValues;
}

export type DateTime = any;
export type Json = any;
export type Long = any;
