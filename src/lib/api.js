export const sendEmail = async (data) => {
  const response = await fetch(
    "https://z2y153af9e.execute-api.eu-north-1.amazonaws.com/send-email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to send email");
  }

  return response.json();
};

export const createCheckoutSession = async (data) => {
  const response = await fetch(
    "https://ro4uadnmtk.execute-api.eu-north-1.amazonaws.com/create-checkout-session",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to create checkout session");
  }

  return response.json();
};
