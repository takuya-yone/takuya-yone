import getConfig from "next/config";

export function url(filename: string): string {
  const { publicRuntimeConfig } = getConfig() as {
    publicRuntimeConfig: { repositoryName: string };
  };
  return publicRuntimeConfig.repositoryName + filename;
}
