const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const twilio = require("twilio");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/send-complaint", async (req, res) => {
  const { name, phone, complaint } = req.body;
  const msg = `📢 Complaint from ${name} (${phone}): ${complaint}`;

  try {
    await client.messages.create({
      body: msg,
      from: process.env.TWILIO_PHONE,
      to: process.env.OWNER_PHONE
    });
    res.json({ success: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
