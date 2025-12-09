export const emulateJWT = () => {
  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const payload = {
    sub: "1",
    user: "Admin",
    role: "admin",
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
  };

  function base64urlEncode(str) {
    const base64 = btoa(unescape(encodeURIComponent(str)));

    return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }

  const headerString = JSON.stringify(header);
  const payloadString = JSON.stringify(payload);

  const encodedHeader = base64urlEncode(headerString);
  const encodedPayload = base64urlEncode(payloadString);

  const simulatedJwt = `${encodedHeader}.${encodedPayload}.fake-signature`;

  return simulatedJwt;
};
