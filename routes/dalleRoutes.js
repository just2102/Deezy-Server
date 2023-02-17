import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const configuration = new Configuration({
  organization: "org-cWFQZXHlsOR9I7Hibrdv6ayH",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
const router = express.Router();
router.route("/")
.post(async (req, res) => {
  try {
    const response = await openai.createImage({
      prompt: req.body.prompt,
      n: 1,
      response_format: "b64_json",
      size: "1024x1024",
    });
    const image = response.data.data[0].b64_json;
  
    res.status(200).json({ photo: image });
  } catch(err) {
    console.log(err)
    res.status(500).send(err?.response.data.error.message)
  }
});

export default router;
