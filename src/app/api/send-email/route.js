import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the JSON body

    // Deconstruct all fields from the request body, including driverNote, hourlyBookingCount, etc.
    const {
      orderNumber,
      date,
      time,
      pickup,
      destination,
      passengers,
      contact,
      totalPrice,
      vehicleDetails,
      driverNote, // Add this line to deconstruct driverNote
      hourlyBookingCount, // Add this line to deconstruct hourlyBookingCount
      additionalVehicleCount, // Add this line to deconstruct additionalVehicleCount
      distanceStartToEnd, // Add this line to deconstruct distanceStartToEnd
      distanceStartToStop, // Add this line to deconstruct distanceStartToStop
      distanceStopToEnd, // Add this line to deconstruct distanceStopToEnd
      splitPaymentDetails, // Add this line to deconstruct splitPaymentDetails
    } = body;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"OzOve" <${process.env.EMAIL_USER}>`,
      to: "eternitywatches212@gmail.com, ozove2023@gmail.com", // Comma-separated emails
      subject: `New Booking: ${orderNumber}`,
      html: `
        <h1>Booking Confirmation</h1>
        <p><strong>Order Number:</strong> ${orderNumber || "N/A"}</p>
        <p><strong>Date:</strong> ${date || "N/A"}</p>
        <p><strong>Time:</strong> ${time || "N/A"}</p>
        <p><strong>Pickup Location:</strong> ${pickup || "N/A"}</p>
        <p><strong>Destination:</strong> ${destination || "N/A"}</p>
        <p><strong>Passengers:</strong> ${passengers || "N/A"}</p>
        <p><strong>Vehicle:</strong> ${vehicleDetails?.name || "N/A"}</p>
        <p><strong>Total Price:</strong> $${totalPrice || "N/A"}</p>
        <p><strong>Contact Name:</strong> ${contact?.name || "N/A"}</p>
        <p><strong>Contact Email:</strong> ${contact?.email || "N/A"}</p>
        <p><strong>Contact Phone:</strong> ${contact?.phone || "N/A"}</p>
        <p><strong>Driver Note:</strong> ${driverNote || "N/A"}</p>
        <p><strong>Hourly Booking Count:</strong> ${hourlyBookingCount || 0}</p>
        <p><strong>Additional Vehicle Count:</strong> ${
          additionalVehicleCount || 0
        }</p>
        <p><strong>Split Payment Details:</strong> ${
          splitPaymentDetails?.passengers
            ? `Passengers: ${
                splitPaymentDetails.passengers
              }, Price Per Person: $${(
                totalPrice / splitPaymentDetails.passengers
              ).toFixed(2)}`
            : "N/A"
        }</p>
        <p><strong>Distance (Start to End):</strong> ${
          distanceStartToEnd || "N/A"
        } km</p>
        <p><strong>Distance (Start to Stop):</strong> ${
          distanceStartToStop || "N/A"
        } km</p>
        <p><strong>Distance (Stop to End):</strong> ${
          distanceStopToEnd || "N/A"
        } km</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
