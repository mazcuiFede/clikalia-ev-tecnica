This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Descripción

La aplicación fue desarrollada según los requerimientos presentes en el email enviado por Ines Rodriguez, la misma cumple con todo a excepción de algunos puntos de funcionalidad de la pantalla de "detalle pokemon". 

## Link aplicación

La aplicación fue deployada con CI/CD utilizando vercel y con StaticSiteRendering (ya que suponemos que la lista de pokemon's será estática)

[Link a la aplicación](https://clikalia-ev-tecnica.vercel.app/)

## Futuras consideraciones

Queda pendiente mejorar los test y realizar otros. La librería utilizada fue Jest junto con @testing-library/react. 
Adicionalmente, existen algunas funcionalidades que no fueron desarrolladas en la pantalla "detalle pokemon" por falta de tiempo.

## Librerías implementadas

Material UI (MUI): para la creación de comoponentes.
Sass: para estilos (aunque solo se utilizaron funcionalidades básicas)
Jest y Testing Library: testing (solo se hicieron configuraciones básicas)
Prop-types: para el control de tipos enviados a componentes (otra opción sería utilizar TS)
Eslint y prettier: Estandarización de código, se configuró "format on save" y para controlar el código previo a hacer el build.


## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
