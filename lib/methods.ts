import {RestClient} from "typed-rest-client";
import {BearerCredentialHandler} from "typed-rest-client/Handlers";
import {ACCESS_TOKEN, BASE_URL} from "./constants";
import {
    RequestInstanceTypeCreate,
    RequestInstanceTypeGetAll,
    RequestInstanceTypeUpdate,
    RequestLayoutCreate,
    RequestLayoutGetAll,
    RequestLayoutGetAllOfInstance,
    RequestLayoutUpdate,
    RequestLayoutUpdatePermission,
    RequestNodeTypeCreate,
    RequestNodeTypeGetAll, RequestNodeTypeUpdate,
    ResponseInstanceTypeCreate,
    ResponseInstanceTypeDelete,
    ResponseInstanceTypeGetAll,
    ResponseInstanceTypeGetById,
    ResponseInstanceTypeUpdate,
    ResponseLayoutCreate,
    ResponseLayoutDelete, ResponseLayoutGetAll,
    ResponseLayoutGetAllOfInstance,
    ResponseLayoutGetById,
    ResponseLayoutUpdate,
    ResponseLayoutUpdatePermission,
    ResponseNodeTypeCreate, ResponseNodeTypeDelete,
    ResponseNodeTypeGetAll,
    ResponseNodeTypeGetById, ResponseNodeTypeUpdate
} from "./types";
import {notNull, notUndefined} from "./constructors";
import {isNotUndefined} from "./guards";

let morpheusAPIClient: RestClient = new RestClient(
    undefined,
    notUndefined(BASE_URL),
    [new BearerCredentialHandler(notUndefined(ACCESS_TOKEN))],
    {ignoreSslError: true}
)

export async function instanceTypeGetAllBase(queryParam?: RequestInstanceTypeGetAll): Promise<ResponseInstanceTypeGetAll> {
    return notNull<ResponseInstanceTypeGetAll>(
        (await morpheusAPIClient.get<ResponseInstanceTypeGetAll>(
            "library/instance-types", isNotUndefined(queryParam) ? { queryParameters: { params: queryParam } }: undefined)
        ).result
    )
}

export async function instanceTypeGetByIdBase(instanceTypeId: number): Promise<ResponseInstanceTypeGetById> {
    return notNull<ResponseInstanceTypeGetById>(
        (await morpheusAPIClient.get<ResponseInstanceTypeGetById>(
                `library/instance-types/${instanceTypeId}`)
        ).result
    )
}

export async function instanceTypeCreateBase(body: RequestInstanceTypeCreate): Promise<ResponseInstanceTypeCreate> {
    return notNull<ResponseInstanceTypeCreate>(
        (await morpheusAPIClient.create<ResponseInstanceTypeCreate>(
                "library/instance-types", body, {additionalHeaders: { "Content-Type": "application/json" }})
        ).result
    )
}

export async function instanceTypeUpdateBase(instanceTypeId: number, body: RequestInstanceTypeUpdate): Promise<ResponseInstanceTypeUpdate> {
    return notNull<ResponseInstanceTypeUpdate>(
        (await morpheusAPIClient.replace<ResponseInstanceTypeUpdate>(
                `library/instance-types/${instanceTypeId}`, body, {additionalHeaders: { "Content-Type": "application/json" }})
        ).result
    )
}

export async function instanceTypeDeleteBase(instanceTypeId: number): Promise<ResponseInstanceTypeDelete> {
    return notNull<ResponseInstanceTypeDelete>(
        (await morpheusAPIClient.del<ResponseInstanceTypeDelete>(
                `library/instance-types/${instanceTypeId}`)
        ).result
    )
}

export async function layoutGetAllBase(queryParam?: RequestLayoutGetAll): Promise<ResponseLayoutGetAll> {
    return notNull<ResponseLayoutGetAll>(
        (await morpheusAPIClient.get<ResponseLayoutGetAll>(
                "library/layouts", isNotUndefined(queryParam) ? { queryParameters: { params: queryParam } }: undefined)
        ).result
    )
}

export async function layoutGetAllOfInstanceBase(instanceTypeId: number, queryParam?: RequestLayoutGetAllOfInstance): Promise<ResponseLayoutGetAllOfInstance> {
    return notNull<ResponseLayoutGetAllOfInstance>(
        (await morpheusAPIClient.get<ResponseLayoutGetAllOfInstance>(
                `library/instance-types/${instanceTypeId}/layouts`, isNotUndefined(queryParam) ? { queryParameters: { params: queryParam } }: undefined)
        ).result
    )
}

export async function layoutGetByIdBase(layoutId: number): Promise<ResponseLayoutGetById> {
    return notNull<ResponseLayoutGetById>(
        (await morpheusAPIClient.get<ResponseLayoutGetById>(
                `library/layouts/${layoutId}`)
        ).result
    )
}

export async function layoutCreateBase(instanceTypeId: number, body: RequestLayoutCreate): Promise<ResponseLayoutCreate> {
    return notNull<ResponseLayoutCreate>(
        (await morpheusAPIClient.create<ResponseLayoutCreate>(
                `library/instance-types/${instanceTypeId}/layouts`, body, {additionalHeaders: { "Content-Type": "application/json" }})
        ).result
    )
}

export async function layoutUpdateBase(layoutId: number, body: RequestLayoutUpdate): Promise<ResponseLayoutUpdate> {
    return notNull<ResponseLayoutUpdate>(
        (await morpheusAPIClient.replace<ResponseLayoutUpdate>(
                `library/layouts/${layoutId}`, body, {additionalHeaders: { "Content-Type": "application/json" }})
        ).result
    )
}

export async function layoutUpdatePermissionBase(layoutId: number, body: RequestLayoutUpdatePermission): Promise<ResponseLayoutUpdatePermission> {
    return notNull<ResponseLayoutUpdatePermission>(
        (await morpheusAPIClient.replace<ResponseLayoutUpdatePermission>(
                `library/layouts/${layoutId}/permissions`, body, {additionalHeaders: { "Content-Type": "application/json" }})
        ).result
    )
}

export async function layoutDeleteBase(layoutId: number): Promise<ResponseLayoutDelete> {
    return notNull<ResponseLayoutDelete>(
        (await morpheusAPIClient.del<ResponseLayoutDelete>(
                `library/layouts/${layoutId}`)
        ).result
    )
}

export async function nodeTypeGetAllBase(queryParam?: RequestNodeTypeGetAll): Promise<ResponseNodeTypeGetAll> {
    return notNull<ResponseNodeTypeGetAll>(
        (await morpheusAPIClient.get<ResponseNodeTypeGetAll>(
                "library/container-types", isNotUndefined(queryParam) ? { queryParameters: { params: queryParam } }: undefined)
        ).result
    )
}

export async function nodeTypeGetByIdBase(nodeTypeId: number): Promise<ResponseNodeTypeGetById> {
    return notNull<ResponseNodeTypeGetById>(
        (await morpheusAPIClient.get<ResponseNodeTypeGetById>(
                `library/container-types/${nodeTypeId}`)
        ).result
    )
}

export async function nodeTypeCreateBase(body: RequestNodeTypeCreate): Promise<ResponseNodeTypeCreate> {
    return notNull<ResponseNodeTypeCreate>(
        (await morpheusAPIClient.create<ResponseNodeTypeCreate>(
                "library/container-types", body, {additionalHeaders: { "Content-Type": "application/json" }})
        ).result
    )
}

export async function nodeTypeUpdateBase(nodeTypeId: number, body: RequestNodeTypeUpdate): Promise<ResponseNodeTypeUpdate> {
    return notNull<ResponseNodeTypeUpdate>(
        (await morpheusAPIClient.replace<ResponseNodeTypeUpdate>(
                `library/container-types/${nodeTypeId}`, body, {additionalHeaders: { "Content-Type": "application/json" }})
        ).result
    )
}

export async function nodeTypeDeleteBase(nodeTypeId: number): Promise<ResponseNodeTypeDelete> {
    return notNull<ResponseNodeTypeDelete>(
        (await morpheusAPIClient.del<ResponseNodeTypeDelete>(
                `library/container-types/${nodeTypeId}`)
        ).result
    )
}
