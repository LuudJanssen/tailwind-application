When I read the application for **Staff Software Engineer** I was shocked: I could get paid to work for OSS while working with ASTs, bundlers, transpilers, Tailwind, and TypeScript?!

After the initial shock settled down, I took a more serious look at the position which grew my excitement even more. For as long as I can remember I have been diving deep into the tools that make the web, helping teams write their best code while meeting deadlines and focusing on finesse. Being able to combine all this with paid open-source work would be a dream.

This led me to take the long shot and apply for the job. So thank you for taking the time to read my application and please bear with me while we dive a little deeper into why I feel I would be a good addition to your team:

1.  [I love diving deep](#i-love-diving-deep)
2.  [I have contributed to open-source](#i-have-contributed-to-open-source)
3.  [I am always chasing a "wow"](#i-am-always-chasing-a-wow)
4.  [I value company culture](#i-value-company-culture)
5.  [I love Tailwind](#i-love-tailwind)

---

## I love diving deep

When I was around 10 years old, PowerPoint became my gateway drug into software development. I used it to create interactive slideshows that presented users with choices and took them to different parts of the storyline based on their choices.

To me, this illustrates that my general interest in using (or abusing) tools to create something new started from a very young age. Paired with a constant curiosity and a desire to understand how things work you might come to understand why software engineering was a natural fit for me, leading to a fruitful career in the field:

- During high school I taught programming to fellow students, while also creating a small business creating websites for local businesses.
- I studied computer science at [Eindhoven University](https://www.tue.nl/en/) which added a theoretical foundation to my practical knowledge.
- During this time, I co-founded a startup in web application security and later joined ISAAC (a dutch agency) where I worked as a front-end developer for 4 years.

I am currently employed at [Incentro](https://incentro.com/), another Dutch agency. During my 3 years here I have had led 3 front-end teams, as well as working on innovation project where we are building a toolset for developers to quickly build headless e-commerce sites.

This project, called micro.nova, focuses on reusing the logic between e-commerce sites. So, where Tailwind and Tailwind UI help us with styling, and Headless UI helps us with functionality and accessibility, micro.nova will offer a set of reusable components that implement the data fetching and logic parts of an e-commerce site. My day-to-day work now involves working on things like:

- CLI tools
- manipulating GraphQL ASTs
- writing extensive documentation
- setting up build pipelines (in GH Actions)
- creating data-fetching tools for React
- writing plugins for codegen tools like [GraphQL Codegen](https://the-guild.dev/graphql/codegen)

## I have contributed to open-source

My developing interests in software engineering have been paired with contributions to open-source software:

- During my startup time, we were working with [Kibana](https://www.elastic.co/kibana), to which I made some very small contributions, as well as creating and open-sourcing the basis for an [ElastAlert plugin for Kibana](https://github.com/bitsensor/elastalert-kibana-plugin).
- During my time at ISAAC (another Dutch agency), I created and open-sourced [a caching wrapper for localforage](https://github.com/LuudJanssen/localforage-cache), and [AngularJS bindings for NoUISlider](https://github.com/isaaceindhoven/angularjs-nouislider).
- At Incentro, I open-sourced [an approach to improving localized routing in an older version of Next.js](https://github.com/LuudJanssen/next-locale-router), though I never got the approval from the client to provide suitable open-source licenses.
- I recently created [a plugin for Remark to turn GitHub's alert syntax into admonitions directives](https://github.com/incentro-dc/remark-github-admonitions-to-directives) by simply manipulating the Markdown AST.

Although I am happy with my contributions to open-source, I have always felt like I could do more. I would love for open-source to be a more integral part of my job, and I think the Staff Software Engineer position at Tailwind Labs would be a great opportunity to do so.

## I am always chasing a "wow"

Whether it's perfecting a PowerPoint by adding interactivity and unexpected animations or using TypeScript generics to create a utility that's a joy to use, I have always been chasing that "wow" moment. That moment when you exceed someone's expectations by just a little bit. That moment when you've put in the extra effort to make something truly special.

<figure>
  <img src="public/powerpoint-wow.gif" alt="An image showing a PowerPoint slideshow with some subtle but effective animations.">
  <figcaption>I like taking the extra time to style my slideshows.</figcaption>
</figure>

Looking at both open positions, as well as the work your team has done, I can't help but feel that you recognize this drive and it's a shared value within the team. Not only do you create tools that work and add real value, but there's a certain amount of elegance and thoughtfulness in the way they were created. This is something I strive for in my work as well.

This drive towards elegance has also forced me to create other skills, like:

- Using video editing skills for [an introduction video](https://vimeo.com/302102524) for the new brand of a student association.
- Creating sound effects for a very small amateur theater production using FL Studio.
- Going overboard with renting equipment for [filming a corporate outing during my time at ISAAC](https://vimeo.com/280936509).
- Learning to manipulate SVGs to create customized digital tickets for streaming events.

<figure>
  <img src="public/strealix-tickets.png" alt="An image showing a digital version of a physical ticket for a streaming event.">
  <figcaption>Manipulating SVGs to create digital tickets for <a href="https://strealix.com/">Strealix</a>, a platform for which I did the branding, design, and front-end all in the span of 3 weeks.</figcaption>
</figure>

While my video editing skills are not on a professional level, I do think it highlights that I won't shy away from learning new things (like Rust) and going the extra mile to create something special.

## I value company culture

I have mentioned my startup period before, and while it was a great experience overall, it taught me about the importance of a strong company culture by setting the wrong example. Work-life balance was non-existent, and I eventually left because of the way team members were treating each other.

Since then I have been fortunate enough to work for some great companies with a strong focus on culture. At ISAAC, we were laser-focused on accessibility. Not because our customer was asking us to, but because it was the right thing to do.

At Incentro we have been a [Great Place to Work](https://www.greatplacetowork.nl/) for years in a row, we have an organizational structure built around cells (ensuring a flat hierarchy), a review process with peers, and complete transparency about salaries.

What excites me about working for Tailwind Labs is the ability to work on free and open-source tools that have a large impact, while also being a part of a profitable company. I love how you are making the conscious choice to be small and independent as I have been pushing back on the idea of endless growth within companies I have worked for.

## I love Tailwind

I am a huge fan of Tailwind's utility-first approach and have been delighted to lead teams using Tailwind. I bought a Tailwind UI license as soon as I got a hold of the project, and I have been loving the concept of Headless UI ever since it was announced. I also created some utilities around Tailwind for use within our company, which I am preparing to open-source.

One of these utilities ([a component factory copying the styled-components syntax](https://github.com/luudjanssen/tailwind-application/blob/main/src/utils/tailwind.tsx)) was used to create this very application:

```tsx [filename.test]
import { CakeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { tailwind } from "../utils/tailwind.js";

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

export function BioDetails() {
  return (
    <Details>
      {details.map((detail) => (
        <Detail key={detail.text}>
          <detail.icon className="h-6 w-6 text-orange-500" />
          {detail.text}
        </Detail>
      ))}
    </Details>
  );
}
```

This utility allows us to keep our JSX clean by moving the Tailwind classes outside of the JSX and allowing the spreading of Tailwind classes over multiple lines. Behind the scenes, there's some fancy TypeScript to make sure the generated components props match the HTML element attributes.

---

## Wrapping up

I hope this application gave you a good impression of who I am and what I can add to the Tailwind team. I am excited about the opportunity to work for Tailwind Labs and I am looking forward to hearing from you.

~ Luud

<figure>
  <img src="public/picture-to-make-the-girlfriend-jealous.jpg" alt="A picture showing Luud and his cat Bami looking at each other.">
  <figcaption>If you hire me, you get 2 for 1. My cat Bami is a mean programmer herself.</figcaption>
</figure>
