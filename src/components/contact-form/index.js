import { createRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Input, Select } from "@/components";
import { sendMail } from "@/services/email";
import validation from "./validation";

const SITE_KEY = process.env.NEXT_PUBLIC_CAPTCHA_SITEKEY;

export default function ContactForm() {
  const [captchaVerified, setCaptchaVerified] = useState(null);

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(validation),
  });

  const onSubmit = async (formData) => {
    if (!captchaVerified) {
      alert("Você deve validar o captcha!");
      return;
    }
    try {
      await sendMail(formData);
      alert("Formulário enviado com sucesso!");
      reset();
      setCaptchaVerified(false);
    } catch (e) {
      console.log(e)
      alert("Erro ao tentar enviar formulário, tente novamente!");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full lg:max-w-[500px] h-full p-3 flex flex-col justify-between bg-secondary rounded-sm border border-white"
    >
      <fieldset>
        <Input
          type="text"
          {...register("name", { required: true })}
          error={errors["name"]}
          placeholder="Qual é seu nome?"
          maxLength="32"
          containerStyle={{ marginTop: "0.5rem" }}
        />
        <Input
          type="email"
          {...register("email", { required: true })}
          error={errors["email"]}
          placeholder="Qual o seu e-mail?"
          containerStyle={{ marginTop: "0.5rem" }}
        />
        <Input
          type="text"
          {...register("phone", { required: true })}
          error={errors["phone"]}
          placeholder="Qual seu telefone/whatsapp?"
          maxLength="18"
          containerStyle={{ marginTop: "0.5rem" }}
        />
      </fieldset>
      <fieldset>
        <Input
          type="text"
          {...register("companyName")}
          placeholder="Qual é o nome da sua empresa?"
          maxLength="35"
          containerStyle={{ marginTop: "0.5rem" }}
        />
        <Select
          {...register("segment", { value: "" })}
          containerStyle={{ marginTop: "0.5rem" }}
        >
          <option value="" disabled>
            Qual o segmento?
          </option>
          <option value="ECOMMERCE">E-Commerce</option>
          <option value="EDUCACAO">Educação</option>
          <option value="INDUSTRIA">Indústria</option>
          <option value="SAAS">SaaS</option>
          <option value="SERVICOS">Serviços</option>
          <option value="VAREJO">Varejo</option>
          <option value="OUTRO">Outro</option>
        </Select>
        <Select
          {...register("billing", { value: "" })}
          containerStyle={{ marginTop: "0.5rem" }}
        >
          <option value="" disabled>
            Qual o faturamento mensal?
          </option>
          <option value="ate 20mil">Até 20 mil</option>
          <option value="entre 21-50mil">De 21 mil à 50 mil</option>
          <option value="entre 51-70mil">De 51 mil à 70 mil</option>
          <option value="entre 71-100mil">De 71 mil à 100 mil</option>
          <option value="entre 101-400mil">De 101 mil à 400 mil</option>
          <option value="entre 401mil-1milhao">De 401 mil à 1 milhão</option>
          <option value="mais de 1milhao">Mais de 1 milhão</option>
        </Select>
        <Select
          {...register("workers", { value: "" })}
          containerStyle={{ marginTop: "0.5rem" }}
        >
          <option value="" disabled>
            Quantos funcionários a empresa tem?
          </option>
          <option value="1">1 funcionário</option>
          <option value="2-10">Entre 2 e 10 funcionários</option>
          <option value="11-20">Entre 11 e 20 funcionários</option>
          <option value="21-50">Entre 21 e 50 funcionários</option>
          <option value="51-100">Entre 51 e 100 funcionários</option>
          <option value="+100">Mais de 100 funcionários</option>
        </Select>
      </fieldset>
      <ReCAPTCHA
        className="mx-auto mt-4"
        sitekey={SITE_KEY}
        onChange={() => setCaptchaVerified(true)}
      />
      <Button
        type="submit"
        variant="filled"
        className="w-full mt-3 disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  );
}
