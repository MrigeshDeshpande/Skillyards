export async function verifyCaptcha(token) {

  if (process.env.NODE_ENV === "development") {
    return true;
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY;

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `secret=${secret}&response=${token}`
    }
  );

  const data = await response.json();

  if (!data.success) return false;
  return true;  
}