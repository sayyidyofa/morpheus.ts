import {
  RequestInstanceTypeCreate,
  RequestInstanceTypeGetAll,
  RequestInstanceTypeUpdate,
  RequestLayoutCreate,
  RequestLayoutGetAll,
  RequestLayoutGetAllOfInstance,
  RequestLayoutUpdate,
  RequestNodeTypeCreate,
  RequestNodeTypeGetAll,
  RequestNodeTypeUpdate,
  ResponseInstanceTypeCreate,
  ResponseInstanceTypeDelete,
  ResponseInstanceTypeGetAll,
  ResponseInstanceTypeGetById,
  ResponseInstanceTypeUpdate,
  ResponseLayoutCreate,
  ResponseLayoutDelete,
  ResponseLayoutGetAll,
  ResponseLayoutGetAllOfInstance,
  ResponseLayoutGetById,
  ResponseLayoutUpdate,
  ResponseLayoutUpdatePermission,
  ResponseNodeTypeCreate,
  ResponseNodeTypeDelete,
  ResponseNodeTypeGetAll,
  ResponseNodeTypeGetById,
  ResponseNodeTypeUpdate,
} from "./lib/types";
import {
  instanceTypeCreateBase,
  instanceTypeDeleteBase,
  instanceTypeGetAllBase,
  instanceTypeGetByIdBase,
  instanceTypeUpdateBase,
  layoutCreateBase,
  layoutDeleteBase,
  layoutGetAllBase,
  layoutGetAllOfInstanceBase,
  layoutGetByIdBase,
  layoutUpdateBase,
  layoutUpdatePermissionBase,
  nodeTypeCreateBase,
  nodeTypeDeleteBase,
  nodeTypeGetAllBase,
  nodeTypeGetByIdBase,
  nodeTypeUpdateBase,
} from "./lib/methods";
import { Permission } from "./utils/typesaving/baseTypes";
import { Workflow } from "./lib/constants";

export async function nodeTypeGetAll(
  filter?: RequestNodeTypeGetAll
): Promise<ResponseNodeTypeGetAll> {
  return nodeTypeGetAllBase(filter);
}

export async function nodeTypeGetById(
  nodeTypeId: number
): Promise<ResponseNodeTypeGetById> {
  return nodeTypeGetByIdBase(nodeTypeId);
}

export async function nodeTypeCreate(
  newNodeType: RequestNodeTypeCreate["containerType"]
): Promise<ResponseNodeTypeCreate> {
  return nodeTypeCreateBase({ containerType: newNodeType });
}

export async function nodeTypeUpdate(
  oldNodeTypeId: number,
  replacingNodeType: RequestNodeTypeUpdate["containerType"]
): Promise<ResponseNodeTypeUpdate> {
  return nodeTypeUpdateBase(oldNodeTypeId, {
    containerType: replacingNodeType,
  });
}

export async function nodeTypeDelete(
  oldNodeTypeId: number
): Promise<ResponseNodeTypeDelete> {
  return nodeTypeDeleteBase(oldNodeTypeId);
}

export async function instanceTypeGetAll(
  filter?: RequestInstanceTypeGetAll
): Promise<ResponseInstanceTypeGetAll> {
  return instanceTypeGetAllBase(filter);
}

export async function instanceTypeGetById(
  instanceTypeId: number
): Promise<ResponseInstanceTypeGetById> {
  return instanceTypeGetByIdBase(instanceTypeId);
}

export async function instanceTypeCreate(
  newInstanceType: RequestInstanceTypeCreate["instanceType"]
): Promise<ResponseInstanceTypeCreate> {
  return instanceTypeCreateBase({ instanceType: newInstanceType });
}

export async function instanceTypeUpdate(
  oldInstanceTypeID: number,
  replacingInstanceType: RequestInstanceTypeUpdate["instanceType"]
): Promise<ResponseInstanceTypeUpdate> {
  return instanceTypeUpdateBase(oldInstanceTypeID, {
    instanceType: replacingInstanceType,
  });
}

export async function instanceTypeDelete(
  oldInstanceTypeID: number
): Promise<ResponseInstanceTypeDelete> {
  return instanceTypeDeleteBase(oldInstanceTypeID);
}

export async function layoutGetAll(
  filter?: RequestLayoutGetAll
): Promise<ResponseLayoutGetAll> {
  return layoutGetAllBase(filter);
}

export async function layoutGetAllOfInstanceType(
  instanceTypeId: number,
  filter?: RequestLayoutGetAllOfInstance
): Promise<ResponseLayoutGetAllOfInstance> {
  return layoutGetAllOfInstanceBase(instanceTypeId, filter);
}

export async function layoutGetById(
  layoutId: number
): Promise<ResponseLayoutGetById> {
  return layoutGetByIdBase(layoutId);
}

export async function layoutCreate(
  instanceTypeID: number,
  newLayout: RequestLayoutCreate["instanceTypeLayout"]
): Promise<ResponseLayoutCreate> {
  return layoutCreateBase(instanceTypeID, { instanceTypeLayout: newLayout });
}

export function layoutCreateWithWorkflow(
  instanceTypeId: number,
  workflowId: Workflow,
  newLayout: RequestLayoutCreate["instanceTypeLayout"]
) {
  newLayout.taskSetId = workflowId;
  return layoutCreateBase(instanceTypeId, { instanceTypeLayout: newLayout });
}

export async function layoutUpdate(
  oldLayoutId: number,
  replacingLayout: RequestLayoutUpdate["instanceTypeLayout"]
): Promise<ResponseLayoutUpdate> {
  return layoutUpdateBase(oldLayoutId, { instanceTypeLayout: replacingLayout });
}

export async function layoutUpdatePermission(
  layoutId: number,
  replacingResourcePermission: Permission["resourcePermissions"]
): Promise<ResponseLayoutUpdatePermission> {
  return layoutUpdatePermissionBase(layoutId, {
    instanceTypeLayout: {
      permissions: {
        resourcePermissions: replacingResourcePermission,
      },
    },
  });
}

export async function layoutDelete(
  oldLayoutId: number
): Promise<ResponseLayoutDelete> {
  return layoutDeleteBase(oldLayoutId);
}
