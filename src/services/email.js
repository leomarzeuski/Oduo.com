import emailjs from "emailjs-com";

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_USER_ID;

export async function sendMail(formData) {
  try {
    await emailjs.send(serviceId, templateId, formData, "eRuxeMEPGMlcok7aw");
  } catch (err) {
    console.log(err)
    throw Error(err);
  }
}
