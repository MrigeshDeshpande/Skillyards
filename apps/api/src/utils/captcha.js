export async function verifyCaptcha(token) {

  if (!token) {
    return false;
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY;

  try {

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

    if (!data.success) {
      return false;
    }

    if (data.score < 0.5) {
      return false;
    }

    return true;

  } catch (err) {

    console.error("Captcha verification error:", err);
    return false;

  }
}