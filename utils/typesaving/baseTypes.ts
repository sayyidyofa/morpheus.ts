export type ProvisionTypeCode =
  | "aks"
  | "alibaba"
  | "amazon"
  | "azure"
  | "maas"
  | "docker"
  | "esxi"
  | "fusion"
  | "google"
  | "huawei"
  | "hyperv"
  | "kubernetes"
  | "kvm"
  | "centurylink-edge"
  | "nutanix"
  | "opentelekom"
  | "openstack"
  | "oraclecloud"
  | "oraclevm"
  | "scvmm"
  | "upcloud"
  | "vcd.vapp"
  | "vcd"
  | "vmware"
  | "xen";

export type InstanceTypeCategory =
  | "web"
  | "sql"
  | "nosql"
  | "apps"
  | "network"
  | "messaging"
  | "cache"
  | "os"
  | "cloud"
  | "utility";

export type ResponseAccount = {
  id: number;
  name: string;
};

export type ResponseTaskSet = {
  id: number;
  name: string;
};

export type ResponseSimple = {
  id: number;
  name: string;
  code: string;
};

export type StupidParams = {
  [name: string]: string | number | (string | number)[];
};

export type ResponseMount = {
  id: number;
  code: string;
  name: string;
  shortName: string;
  mountType: string;
  sortOrder: number;
  required: boolean;
  visible: boolean;
  deployable: boolean;
  canPersist: boolean;
};

export type ResponseInstanceType = {
  id: number;
  account: ResponseAccount | null;
  name: string;
  code: string;
  description: string | null;
  provisionTypeCode: ProvisionTypeCode | null;
  category: string | null;
  active: boolean;
  environmentPrefix: string;
  visibility: "public" | "private";
  featured: false;
  versions: Array<string>;
  instanceTypeLayouts: Array<ResponseInstanceTypeLayout>;
};

export type ResponseInstanceTypeLayout = {
  id: number;
  name: string;
  provisionTypeCode: ProvisionTypeCode;
};

export type ResponseInstanceTypeLayoutDetailed = {
  id: number;
  instanceType: Pick<ResponseInstanceType, "id" | "name" | "code">;
  account: ResponseAccount | null;
  code: string;
  name: string;
  instanceVersion: string;
  description: string;
  creatable: boolean;
  memoryRequirement: number | null;
  sortOrder: number;
  supportsConvertToManaged: boolean;
  provisionType: ResponseProvisionTypeDetailed;
  taskSets: Array<ResponseTaskSet>;
  containerTypes: Array<ResponseContainerType>;
  mounts: Array<ResponseMount>;
  ports: Array<ResponseContainerPortDetailed>;
  optionTypes: Array<unknown>;
  environmentVariables: Array<ResponseEnvironmentVariable>;
  specTemplates: Array<unknown>;
  permissions: PermissionDetailed;
};

export type RequestEnvironmentVariable = {
  name: string;
  value?: string;
  masked: boolean;
  export: boolean;
};

export type ResponseEnvironmentVariable = Required<RequestEnvironmentVariable>;

export type ResponseProvisionType = {
  id: number;
  name: string;
  code: ProvisionTypeCode;
};

export type ResponseProvisionTypeDetailed = ResponseProvisionType & {
  description: string | null;
  aclEnabled: boolean;
  multiTenant: boolean;
  managed: boolean;
  hostNetwork: boolean;
  customSupported: boolean;
  mapPorts: boolean;
  exportServer: boolean;
  viewSet: string;
  serverType: string;
  hostType: string;
  addVolumes: boolean;
  hasVolumes: boolean;
  hasDatastore: boolean;
  hasNetworks: boolean;
  maxNetworks: number;
  customizeVolume: boolean;
  rootDiskCustomizable: boolean;
  rootDiskSizeKnown: boolean;
  rootDiskResizable: boolean;
  lvmSupported: boolean;
  hostDiskMode: unknown | null;
  minDisk: number;
  maxDisk: unknown | null;
  resizeCopiesVolumes: boolean;
  supportsAutoDatastore: boolean;
  hasZonePools: boolean;
  hasSecurityGroups: boolean;
  hasParameters: boolean;
  canEnforceTags: boolean;
  disableRootDatastore: boolean;
  hasSnapshots: boolean;
  hasSpecTemplates: boolean;
  hasPreview: boolean;
  zonePoolRequired: boolean;
  planRequiresPool: boolean;
  hasFolders: unknown | null;
  optionTypes: Array<unknown>;
  customOptionTypes: Array<unknown>;
  networkTypes: Array<unknown>;
  storageTypes: Array<unknown>;
  rootStorageTypes: Array<unknown>;
  controllerTypes: Array<unknown>;
};

export type ResponseVirtualImage = {
  id: number;
  name: string;
};

export type ResponseContainerPort = {
  id: number;
  name: string;
  port: number;
  loadBalanceProtocol: "http" | "https";
  exportName: "string";
};

export type ResponseContainerPortDetailed = {
  id: number;
  code: string;
  name: string;
  shortName: string;
  internalPort: number;
  externalPort: number;
  loadBalancePort: number | null;
  sortOrder: number;
  loadBalanceProtocol: string | null;
  loadBalance: boolean;
  visible: boolean;
};

export type ResponseContainerType = {
  id: number;
  account: ResponseAccount | null;
  name: string;
  shortName: string;
  code: string;
  containerVersion: string;
  provisionType: ResponseProvisionType;
  virtualImage: ResponseVirtualImage;
  category: string | null;
  config: Record<string, string | boolean | number> | null;
  containerPorts: Array<ResponseContainerPort>;
  containerScripts: Array<{ id: number; name: string }>;
  containerTemplates: Array<string>;
  environmentVariables: Array<ResponseEnvironmentVariable>;
};

export type ResponseMeta = {
  size: number;
  total: number;
  max: number;
  offset: number;
};

export type Permission = {
  resourcePermissions?: ResourcePermission;
};

export type PermissionDetailed = {
  resourcePermission: ResourcePermissionDetailed;
};

export type ResourcePermission = {
  all?: boolean;
  sites?: Array<{ id: number }>;
};

export type ResourcePermissionDetailed = ResourcePermission & {
  defaultStore: boolean;
  allPlans: boolean;
  defaultTarget: boolean;
  canManage: boolean;
  account: { id: number };
  plans: Array<unknown>;
};
