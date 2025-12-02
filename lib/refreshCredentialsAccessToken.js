export default async function refreshCredentialsAccessToken(token) {
  try {
    // verify refresh token
    const decoded = jwt.verify(
      token.refreshToken,
      process.env.JWT_REFRESH_TOKEN_SECRET
    );

    // create new access token
    const accessToken = jwt.sign(
      { id: decoded.id, email: decoded.email },
      process.env.JWT_ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    return {
      ...token,
      accessToken: accessToken,
      accessTokenExpires: Date.now() + 1000 * 60 * 60,
    };
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      console.log("Refresh token expired");
    } else {
      console.log("Invalid token");
    }
    return { ...token, error: "RefreshAccessTokenError" };
  }
}
