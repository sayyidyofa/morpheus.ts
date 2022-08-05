import {
  InstanceTypeCategory,
  Permission,
  ResponseProvisionType,
  ProvisionTypeCode,
  RequestEnvironmentVariable,
  ResponseAccount,
  ResponseContainerType,
  ResponseEnvironmentVariable,
  ResponseInstanceType,
  ResponseInstanceTypeLayoutDetailed,
  ResponseMeta,
  ResponseVirtualImage,
  ResponseContainerPort,

} from "../utils/typesaving/baseTypes";

export type RequestInstanceTypeGetAll = {
  max?: number; // 25
  offset?: number; // 0
  sort?: string; // name
  direction?: string; // asc
  phrase?: string;
  name?: string;
  code?: string;
  featured?: "true" | "false";
};

export type ResponseInstanceTypeGetAll = {
  instanceTypes: Array<ResponseInstanceType>;
  meta: ResponseMeta;
};

export type ResponseInstanceTypeGetById = {
  instanceType: Omit<ResponseInstanceType, "instanceTypeLayouts"> & {
    hasProvisionStep: boolean;
    hasDeployment: boolean;
    hasConfig: boolean;
    hasSettings: boolean;
    hasAutoScale: boolean;
    proxyType: string | null;
    proxyPort: number | null;
    proxyProtocol: string | null;
    backupType: string;
    instanceTypeLayouts: Array<ResponseInstanceTypeLayoutDetailed>;
    optionTypes: Array<unknown>;
    environmentVariables: Array<ResponseEnvironmentVariable>;
  };
};

export type RequestInstanceTypeCreate = {
  instanceType: {
    name: string;
    description?: string;
    code?: string;
    category: InstanceTypeCategory;
    visibility?: "public" | "private";
    featured?: boolean;
    hasSettings?: boolean;
    hasAutoScale?: boolean;
    hasDeployment?: boolean;
    environmentPrefix?: string;
    environmentVariables?: Array<RequestEnvironmentVariable>;
    optionTypes?: Array<number>;
  };
};

export type ResponseInstanceTypeCreate = {
  instanceType: ResponseInstanceTypeGetById;
  success: boolean;
};

export type RequestInstanceTypeUpdate = RequestInstanceTypeCreate;

export type ResponseInstanceTypeUpdate = ResponseInstanceTypeCreate;

export type ResponseInstanceTypeToggleFeatured = {
  success: boolean;
};

export type RequestInstanceTypeUpdateLogo = {
  logo: Buffer;
};

export type ResponseInstanceTypeUpdateLogo = {
  success: boolean;
};

export type ResponseInstanceTypeDelete = {
  success: boolean;
};

export type RequestLayoutGetAll = RequestNodeTypeGetAll & {
  provisionType?: string;
};

export type ResponseLayoutGetAll = {
  instanceTypeLayouts: Array<ResponseInstanceTypeLayoutDetailed>;
  meta: ResponseMeta;
};

export type RequestLayoutGetAllOfInstance = RequestLayoutGetAll;

export type ResponseLayoutGetAllOfInstance = ResponseLayoutGetAll;

export type ResponseLayoutGetById = {
  instanceTypeLayout: ResponseInstanceTypeLayoutDetailed;
};

export type RequestLayoutCreate = {
  instanceTypeLayout: {
    name: string;
    description?: string;
    instanceVersion: string;
    creatable?: boolean;
    hasAutoScale?: boolean;
    supportsConvertToManaged?: boolean;
    memoryRequirement?: number;
    provisionTypeCode: ProvisionTypeCode;
    containerTypes?: Array<number>;
    taskSetId?: number;
    environmentVariables?: Array<RequestEnvironmentVariable>;
    permissions?: Permission;
  };
};

export type ResponseLayoutCreate = {
  instanceTypeLayout: ResponseInstanceTypeLayoutDetailed;
  success: boolean;
};

export type RequestLayoutUpdate = RequestLayoutCreate;

export type ResponseLayoutUpdate = {
  success: boolean;
};

export type RequestLayoutUpdatePermission = {
  instanceTypeLayout: {
    permissions: Permission;
  };
};

export type ResponseLayoutUpdatePermission = {
  success: boolean;
};

export type ResponseLayoutDelete = {
  success: boolean;
};

export type RequestNodeTypeGetAll = {
  max?: number; // 25
  offset?: number; // 0
  sort?: string; // name
  direction?: string; // asc
  phrase?: string;
  name?: string;
  code?: string;
};

export type ResponseNodeTypeGetAll = {
  containerTypes: Array<ResponseContainerType>;
  meta: ResponseMeta;
};

export type ResponseNodeTypeGetById = {
  containerType: ResponseContainerType;
};

export type RequestNodeTypeCreate = {
  containerType: {
    name: string;
    shortName: string;
    code?: string;
    description?: string;
    virtualImageId?: number;
    containerVersion: string;
    provisionTypeCode: ProvisionTypeCode;
    scripts?: Array<number>;
    templates?: Array<number>;
    environmentVariables?: Array<RequestEnvironmentVariable>;
  };
};

export type ResponseNodeTypeCreate = {
  containerType: {
    id: number;
    account: ResponseAccount;
    name: string;
    shortName: string;
    code: string;
    containerVersion: string;
    provisionType: ResponseProvisionType;
    virtualImage: ResponseVirtualImage | null;
    category: string | null;
    config: Record<string, string | boolean | number> | null;
    containerPorts: Array<ResponseContainerPort>;
    containerScripts: Array<{ id: number; name: string }>;
    containerTemplates: Array<string>;
    environmentVariables: Array<ResponseEnvironmentVariable>;
  };
  success: boolean;
};

export type RequestNodeTypeUpdate = {
  containerType: {
    name: string;
    description?: string;
    containerVersion: string;
    provisionTypeCode: ProvisionTypeCode;
    containerScripts?: Array<number>;
    containerTemplates?: Array<number>;
    environmentVariables?: Array<RequestEnvironmentVariable>;
  };
};

export type ResponseNodeTypeUpdate = ResponseNodeTypeCreate;

export type ResponseNodeTypeDelete = {
  success: boolean;
};
