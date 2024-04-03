import { CakeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { tailwind } from "../utils/tailwind.js";

const Container = tailwind.div(
  "container mx-auto flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:px-8",
);

const Image = tailwind.img("max-w-80 mix-blend-multiply md:w-1/2");

const TextContainer = tailwind.div(
  "flex flex-col items-center justify-center text-left md:order-1 md:items-start",
);

const Title = tailwind.span(
  "text-nowrap font-sans text-4xl font-bold text-slate-900",
);

const Subtitle = tailwind.span(
  "text-nowrap font-sans text-3xl font-medium text-orange-500",
);

const Details = tailwind.div(
  "mt-8 flex flex-col items-start justify-center gap-4 md:ml-8",
);

const Detail = tailwind.div(
  "flex items-center gap-3 font-sans text-lg text-slate-700",
);

const details = [
  { icon: MapPinIcon, text: "The Netherlands (UTC+1)" },
  {
    icon: CakeIcon,
    text: "27 years old",
  },
];

export function Bio() {
  return (
    <Container>
      <TextContainer>
        <Title>Hi team Tailwind</Title>
        <Subtitle>I'm Luud</Subtitle>

        <Details>
          {details.map((detail) => (
            <Detail key={detail.text}>
              <detail.icon className="h-6 w-6 text-orange-500" />
              {detail.text}
            </Detail>
          ))}
        </Details>
      </TextContainer>

      <Image
        src="/public/picture-from-2016-do-not-use-for-applications-in-2024-just-because-its-a-nice-picture.jpg"
        alt="A photo of Luud Janssen, a young caucasian male."
      />
    </Container>
  );
}
