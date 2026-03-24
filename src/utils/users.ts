export type StoredTokens = {
  accessToken: string;
  refreshToken: string;
};

const USER_KEY = "travel-user";
const TOKENS_KEY = "travel-tokens";

export function storeUserInfoToStorage(data: unknown) {
  if (typeof window === "undefined") return;
  localStorage.setItem(USER_KEY, JSON.stringify(data));
}

export function storeUserTokens(tokens: StoredTokens) {
  if (typeof window === "undefined") return;
  localStorage.setItem(TOKENS_KEY, JSON.stringify(tokens));
}

export function updateAccessToken(newTokens: {
  accessToken: string;
  refreshToken?: string;
}) {
  if (typeof window === "undefined") return;

  const tokens = getUserTokens();
  if (!tokens) return;

  const updatedTokens: StoredTokens = {
    accessToken: newTokens.accessToken,
    refreshToken: newTokens.refreshToken ?? tokens.refreshToken,
  };

  localStorage.setItem(TOKENS_KEY, JSON.stringify(updatedTokens));
}

export function getUserTokens(
  token: "all" | "accessToken" | "refreshToken" = "all",
) {
  if (typeof window === "undefined") return;

  const tokens = localStorage.getItem(TOKENS_KEY);
  if (!tokens) return null;

  const data = JSON.parse(tokens);

  switch (token) {
    case "accessToken":
      return data.accessToken;
    case "refreshToken":
      return data.refreshToken;
    default:
      return data;
  }
}

export function getUserInfoFromStorage() {
  if (typeof window === "undefined") return null;

  const user = localStorage.getItem(USER_KEY);
  if (!user) return null;

  return JSON.parse(user);
}

export function getUserAccessTokenFromStorage() {
  return getUserTokens("accessToken");
}

export function getUserRefreshTokenFromStorage() {
  return getUserTokens("refreshToken");
}

export function clearUserInfoFromStorage() {
  if (typeof window === "undefined") return null;

  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(TOKENS_KEY);
}
